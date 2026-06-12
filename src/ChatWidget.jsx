import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';

/**
 * AI chat dock. Talks to /api/chat (Vercel serverless proxy → NVIDIA Nemotron)
 * and streams the answer token by token.
 */
export default function ChatWidget({ t, lang }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);
  const greetedLang = useRef(null);

  // (Re)seed greeting when opened or language changes before first user msg
  useEffect(() => {
    if (open && (messages.length === 0 || (greetedLang.current !== lang && messages.every((m) => m.role !== 'user')))) {
      greetedLang.current = lang;
      setMessages([{ role: 'assistant', content: t.hello }]);
    }
  }, [open, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, busy, open]);

  const send = async (raw) => {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setInput('');
    const history = [...messages, { role: 'user', content: text }];
    setMessages(history);
    setBusy(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lang,
          // keep payload light: last 10 turns only
          messages: history.slice(-10).map(({ role, content }) => ({ role, content })),
        }),
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      // stream plain-text chunks
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        const snapshot = acc;
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: 'assistant', content: snapshot };
          return next;
        });
      }
      if (!acc.trim()) throw new Error('empty');
    } catch {
      setMessages((prev) => {
        const next = prev.filter((m, i) => !(i === prev.length - 1 && m.role === 'assistant' && !m.content));
        return [...next, { role: 'assistant', content: t.error }];
      });
    } finally {
      setBusy(false);
    }
  };

  const showSuggests = messages.filter((m) => m.role === 'user').length === 0;

  if (!open) {
    return (
      <button className="chat-fab" onClick={() => setOpen(true)} aria-label="Open AI chat">
        <Sparkles size={17} /> {t.fab}
      </button>
    );
  }

  return (
    <div className="chat-panel" role="dialog" aria-label="AI assistant">
      <div className="chat-head">
        <div>
          <div className="title">
            <span className="status-dot" /> <MessageSquare size={15} /> {t.header}
          </div>
          <span className="sub">{t.sub}</span>
        </div>
        <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
          <X size={19} />
        </button>
      </div>

      <div className="chat-body">
        {messages.map((m, i) => (
          <div key={i} className={`chat-msg ${m.role === 'assistant' ? 'ai' : 'user'}`}>
            {m.content || (
              <span className="typing"><i /><i /><i /></span>
            )}
          </div>
        ))}
        {busy && messages[messages.length - 1]?.role === 'user' && (
          <div className="chat-msg ai"><span className="typing"><i /><i /><i /></span></div>
        )}
        <div ref={endRef} />
      </div>

      {showSuggests && (
        <div className="chat-suggests">
          {t.suggests.map((s) => (
            <button key={s} onClick={() => send(s)}>{s}</button>
          ))}
        </div>
      )}

      <form
        className="chat-form"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          aria-label={t.placeholder}
        />
        <button type="submit" disabled={busy || !input.trim()} aria-label="Send">
          <Send size={17} />
        </button>
      </form>
    </div>
  );
}
