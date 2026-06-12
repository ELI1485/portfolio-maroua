import { useEffect, useState } from 'react';
import {
  Moon, Sun, Globe, Download, Mail, ArrowUpRight,
  Code2, Wrench, Database, Layers, Briefcase, Server, Terminal, Cpu, Film, Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { translations } from './i18n';
import { skillGroups, marqueeItems, projects, links } from './data';
import { useReveal, useTypewriter, useScrollProgress } from './hooks';
import ChatWidget from './ChatWidget';
import profilePic from './assets/profile.jpg';
import './index.css';

const ICONS = {
  code: Code2, wrench: Wrench, database: Database, layers: Layers,
  briefcase: Briefcase, server: Server, terminal: Terminal, cpu: Cpu, film: Film,
};

const Icon = ({ name, size = 20 }) => {
  const C = ICONS[name] || Code2;
  return <C size={size} />;
};

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');
  const t = translations[lang];
  const rootRef = useReveal();
  const progress = useScrollProgress();
  const typed = useTypewriter(t.hero.roles);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <div ref={rootRef}>
      <div className="backdrop" aria-hidden="true" />

      {/* ---------- NAV ---------- */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <span className="tick">~/</span>maroua.arbouni <span className="tick">_</span>
          </a>
          <div className="nav-links">
            <a href="#skills">{t.nav.skills}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#education">{t.nav.education}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} aria-label="Switch language">
              <Globe size={15} /> {lang === 'en' ? 'FR' : 'EN'}
            </button>
            <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Switch theme">
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </div>
        </div>
        <div className="scroll-progress" style={{ width: `${progress}%` }} />
      </nav>

      {/* ---------- HERO ---------- */}
      <header className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="hero-kicker mono reveal">
              <span className="dot" /> {t.hero.kicker}
            </div>
            <h1 className="hero-name reveal reveal-d1">
              Maroua<br /><span className="outline">Arbouni</span>
            </h1>
            <div className="hero-role reveal reveal-d2" aria-label={t.hero.roles[0]}>
              <span className="typed">{typed}</span><span className="caret" />
            </div>
            <p className="hero-desc reveal reveal-d2">{t.hero.desc}</p>
            <div className="hero-cta reveal reveal-d3">
              <a href="#projects" className="btn btn-primary">{t.hero.viewProjects} <ArrowUpRight size={16} /></a>
              <a href={links.cv} download className="btn"><Download size={15} /> {t.hero.downloadCV}</a>
            </div>
            <div className="hero-stats reveal reveal-d3">
              {t.hero.stats.map((s) => (
                <div className="stat" key={s.lbl}>
                  <div className="num">{s.num}<em>{s.plus}</em></div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="portrait-wrap reveal reveal-d2">
            <div className="portrait-frame">
              <span className="portrait-badge">{t.hero.badge}</span>
              <img src={profilePic} alt="Maroua Arbouni" />
              <div className="portrait-bar mono">
                <span>{t.hero.photoCaption}</span>
                <span>ENSA·AH</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- MARQUEE ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <main className="container">
        {/* ---------- SKILLS ---------- */}
        <section className="section" id="skills">
          <div className="section-head reveal">
            <span className="idx mono">01</span>
            <h2>{t.skills.title}</h2>
            <span className="rule" />
          </div>
          <div className="skills-grid">
            {skillGroups.map((g, i) => (
              <div className={`skill-card reveal reveal-d${(i % 3) + 1}`} key={g.key}>
                <div className="skill-top">
                  <span className="skill-icon"><Icon name={g.icon} size={18} /></span>
                  <h3>{t.skills.groups[g.key]}</h3>
                </div>
                <div className="chips">
                  {g.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="langs-row reveal">
            <span className="mono lbl">{t.skills.langsLabel}</span>
            <div className="chips">
              {t.skills.langs.map((l) => <span className="chip" key={l}>{l}</span>)}
            </div>
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section className="section" id="projects">
          <div className="section-head reveal">
            <span className="idx mono">02</span>
            <h2>{t.projects.title}</h2>
            <span className="rule" />
          </div>
          <div className="projects-grid">
            {projects[lang].map((p, i) => (
              <article className={`project-card reveal reveal-d${(i % 3) + 1}${p.featured ? ' featured' : ''}`} key={p.title}>
                <div className="project-top">
                  <span className="project-num">/{String(i + 1).padStart(2, '0')}</span>
                  <span className="project-icon"><Icon name={p.icon} size={22} /></span>
                </div>
                <h3>{p.title}</h3>
                <div className="tech">{p.tech}</div>
                <p>{p.desc}</p>
                {p.github && (
                  <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
                    <GithubIcon size={13} /> {t.projects.view} <ArrowUpRight size={13} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ---------- EDUCATION ---------- */}
        <section className="section" id="education">
          <div className="section-head reveal">
            <span className="idx mono">03</span>
            <h2>{t.education.title}</h2>
            <span className="rule" />
          </div>
          <div className="timeline">
            {t.education.items.map((e, i) => (
              <div className={`timeline-item reveal reveal-d${i + 1}`} key={e.what}>
                <div className="when mono">{e.when}</div>
                <h3>{e.what}</h3>
                <div className="where">{e.where}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section className="section" id="contact">
          <div className="contact-panel reveal">
            <h2>{t.contact.title} <em>{t.contact.titleAccent}</em></h2>
            <p>{t.contact.desc}</p>
            <div className="contact-cta">
              <a href={`mailto:${links.email}`} className="btn btn-primary"><Mail size={15} /> {t.contact.email}</a>
              <a href={links.github} target="_blank" rel="noreferrer" className="btn"><GithubIcon size={15} /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn"><LinkedinIcon size={15} /> LinkedIn</a>
            </div>
          </div>

          <footer className="footer mono">
            <span>{t.footer.rights}</span>
            <span>{t.footer.built} · <Sparkles size={12} style={{ display: 'inline', verticalAlign: '-2px' }} /></span>
          </footer>
        </section>
      </main>

      <ChatWidget t={t.chat} lang={lang} />
    </div>
  );
}
