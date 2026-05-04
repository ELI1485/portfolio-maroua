import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Globe, MessageSquare, Terminal, Briefcase, User, Mail, FileCode, Server, Database, Download, X, Send } from 'lucide-react';
import './index.css';
import profilePic from './assets/profile.jpg';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! I am Maroua\'s AI assistant. How can I help you today? ' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    // Simulate AI thinking delay
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let response = "I'm not sure how to answer that. You can ask me about Maroua's skills, her projects, or why she would be a great intern!";
      
      if (lowerInput.includes('stagiaire') || lowerInput.includes('intern') || lowerInput.includes('hire') || lowerInput.includes('why')) {
        response = "Maroua is actively seeking an internship! As an AI & Digital Transformation engineering student, she combines strong theoretical knowledge with hands-on experience in modern stacks (Laravel, PHP, Python, C). She is highly adaptable, autonomous, and ready to bring value to your team from day one.";
      } else if (lowerInput.includes('bring') || lowerInput.includes('value') || lowerInput.includes('company') || lowerInput.includes('contribute')) {
        response = "Maroua will bring a unique blend of deep technical expertise (Laravel, PHP, Java, Python, C) and strategic enterprise architecture skills (ArchiMate) to your company. Her ability to translate complex business needs into efficient, automated digital solutions will add immediate, tangible value to your team.";
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('language')) {
        response = "She is proficient in PHP, Python, Java, C, and web technologies. She speaks English, French, and Arabic fluently, and possesses a B2 level in Korean (understanding, reading, and writing)!";
      } else if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work')) {
        response = "She has worked on impressive projects including a Pharmacy Management System in C, a custom Automata Compiler, and a movie management platform called CozyWatch. Check out the Projects section!";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
        response = "You can reach her via email at arbouni.maroua@etu.uae.ac.ma or connect with her on LinkedIn. Scroll down to the Contact section for quick links!";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = "Hello there! What would you like to know about Maroua?";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: response }]);
    }, 800);
  };

  const projects = [
    {
      title: 'Building Permit Platform',
      tech: 'Laravel, MySQL, Python (NLP), Taiga',
      desc: 'Accomplished full digitalization of building permit lifecycles by designing a comprehensive web platform featuring online submission and multi-actor validation.',
      icon: <Server size={24} />
    },
    {
      title: 'Universal Data Analyzer',
      tech: 'Python, Pandas, Streamlit, SQLite',
      desc: 'Automated cross-file data consolidation and reporting for rapid insights by engineering a Python application that processes multiple Excel uploads.',
      icon: <Database size={24} />
    },
    {
      title: 'CozyWatch',
      tech: 'Laravel, PHP, Bootstrap',
      desc: 'Developed a movie management platform using Laravel MVC, featuring full CRUD operations and a robust database schema.',
      icon: <FileCode size={24} />
    },
    {
      title: 'MediControl (C)',
      tech: 'C, Linked Lists, File I/O',
      desc: 'Developed an application in C utilizing linked lists to handle pharmacy stock management, order tracking, and centralized low-stock notifications.',
      icon: <Terminal size={24} />
    },
    {
      title: 'Boarding School Architecture',
      tech: 'ArchiMate, Zachman Framework',
      desc: 'Designed the enterprise architecture (AS-IS to TO-BE) for a boarding school platform covering student accommodation, secure payments, and BI reporting.',
      icon: <Briefcase size={24} />
    },
    {
      title: 'Custom Automata Compiler',
      tech: 'C, Flex, Bison, Graphviz',
      desc: 'Created "Language A", a custom language compiled with Flex and Bison, designed to generate and simulate automata with semantic error detection.',
      icon: <Terminal size={24} />
    }
  ];

  return (
    <div className="portfolio-wrapper">
      {/* Navbar */}
      <nav className="glass-panel" style={{ margin: '1rem', padding: '1rem 2rem', position: 'sticky', top: '1rem', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="font-accent" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>&lt;Portfolio/&gt;</div>
        
        <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }} className="nav-links">
          <a href="#about" className="hover-link">À propos</a>
          <a href="#skills" className="hover-link">Compétences</a>
          <a href="#projects" className="hover-link">Projets</a>
          <a href="#contact" className="hover-link">Contact</a>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="glass-button" aria-label="Langue"><Globe size={18} /> FR</button>
          <button className="glass-button" onClick={toggleTheme} aria-label="Thème">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="glass-button primary" onClick={() => setChatOpen(true)}><MessageSquare size={18} /> Ask AI</button>
        </div>
      </nav>

      <main className="container" style={{ padding: '4rem 0' }}>
        
        {/* Hero Section */}
        <section id="about" style={{ display: 'flex', gap: '4rem', alignItems: 'center', marginBottom: '8rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <h3 className="font-accent" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Hello, I'm</h3>
            <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1rem' }}>Maroua Arbouni</h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>AI & Digital Transformation Engineering Student</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px' }}>
              Equipped with strong analytical skills and expertise ranging from web development to enterprise architecture and artificial intelligence integration. Passionate about designing innovative digital platforms.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#projects" className="glass-button primary">View Projects</a>
              <a href="/cv_maroua.pdf" download className="glass-button" style={{ border: '1px solid var(--accent)' }}><Download size={18} /> Download CV</a>
              <a href="#contact" className="glass-button">Let's Talk</a>
            </div>
          </div>
          
          <div style={{ position: 'relative', width: '350px', height: '450px' }}>
            <div className="glass-panel animate-float" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', padding: '10px' }}>
              <img src={profilePic} alt="Maroua Arbouni" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            </div>
            {/* Floating Badges */}
            <div className="glass-panel animate-float-delayed font-accent" style={{ position: 'absolute', bottom: '-20px', left: '-40px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
              <Terminal size={20} color="var(--accent)"/> <span>Code Junkie</span>
            </div>
            <div className="glass-panel animate-float font-accent" style={{ position: 'absolute', top: '40px', right: '-60px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
              <Server size={20} color="var(--accent)"/> <span>Engineer To-Be</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Compétences Techniques</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>Programming</h3>
              <p>PHP, Python, Java (OOP), C, HTML, CSS</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>Frameworks</h3>
              <p>Laravel, Bootstrap, Linux, MySQL</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>Architecture</h3>
              <p>ArchiMate, SWOT, PESTEL, Porter</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>Languages</h3>
              <p>English, French, Arabic, Korean (B2 Level)</p>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Projets Réalisés</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {projects.map((project, index) => (
              <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{project.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p className="font-accent" style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>{project.tech}</p>
                <p style={{ flex: 1 }}>{project.desc}</p>
                <button className="glass-button" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>Voir plus</button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Prêt à collaborer ?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Je suis toujours ouverte à de nouvelles opportunités de stage et de projets.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:arbouni.maroua@etu.uae.ac.ma" className="glass-button primary"><Mail size={18} /> arbouni.maroua@etu.uae.ac.ma</a>
            <a href="https://github.com/ELI1485" target="_blank" rel="noreferrer" className="glass-button"><User size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/maroua-arbouni-515312334/" target="_blank" rel="noreferrer" className="glass-button"><Globe size={18} /> LinkedIn</a>
          </div>
        </section>

      </main>

      {/* AI Chat Modal */}
      {chatOpen && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '350px', zIndex: 1000 }} className="glass-panel">
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="font-accent" style={{ margin: 0, color: 'var(--accent)' }}><MessageSquare size={16} style={{display:'inline', marginRight:'5px'}}/> Ask AI</h3>
            <button onClick={() => setChatOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}><X size={20} /></button>
          </div>
          
          <div style={{ padding: '1rem', height: '300px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.sender === 'ai' ? 'flex-start' : 'flex-end', background: msg.sender === 'ai' ? 'var(--bg-glass-heavy)' : 'var(--accent)', color: msg.sender === 'ai' ? 'var(--text-main)' : '#fff', padding: '0.8rem', borderRadius: '12px', maxWidth: '85%', fontSize: '0.9rem' }}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSendMessage} style={{ padding: '1rem', borderTop: '1px solid var(--border-glass)', display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask about Maroua..." 
              style={{ flex: 1, padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-glass)', color: 'var(--text-main)', outline: 'none' }} 
            />
            <button type="submit" className="glass-button primary" style={{ padding: '0.5rem' }}><Send size={18} /></button>
          </form>
        </div>
      )}

    </div>
  );
};

export default Portfolio;
