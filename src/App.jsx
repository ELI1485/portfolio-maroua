import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Globe, MessageSquare, Terminal, Briefcase, User, Mail, FileCode, Server, Database, Download, X, Send } from 'lucide-react';
import './index.css';
import profilePic from './assets/profile.jpg';

const Portfolio = () => {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');
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

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
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
      let response = lang === 'en' 
        ? "I'm not sure how to answer that. You can ask me about Maroua's skills, her projects, or why she would be a great intern!"
        : "Je ne suis pas sûr de savoir comment répondre. Vous pouvez m'interroger sur les compétences de Maroua, ses projets ou pourquoi elle ferait une excellente stagiaire !";
      
      if (lowerInput.includes('stagiaire') || lowerInput.includes('intern') || lowerInput.includes('hire') || lowerInput.includes('why')) {
        response = lang === 'en'
          ? "Maroua is actively seeking an internship! As an AI & Digital Transformation engineering student, she combines strong theoretical knowledge with hands-on experience in modern stacks (Laravel, PHP, Python, C). She is highly adaptable, autonomous, and ready to bring value to your team from day one."
          : "Maroua recherche activement un stage ! En tant qu'élève ingénieure en IA & Transformation Digitale, elle combine de solides connaissances théoriques avec une expérience pratique des technologies modernes (Laravel, PHP, Python, C). Elle est autonome et prête à apporter de la valeur à votre équipe dès le premier jour.";
      } else if (lowerInput.includes('bring') || lowerInput.includes('value') || lowerInput.includes('company') || lowerInput.includes('contribute')) {
        response = lang === 'en'
          ? "Maroua will bring a unique blend of deep technical expertise (Laravel, PHP, Java, Python, C) and strategic enterprise architecture skills (ArchiMate) to your company. Her ability to translate complex business needs into efficient, automated digital solutions will add immediate, tangible value to your team."
          : "Maroua apportera à votre entreprise un mélange unique d'expertise technique (Laravel, PHP, Java, Python, C) et de compétences en architecture d'entreprise (ArchiMate). Sa capacité à traduire des besoins complexes en solutions numériques automatisées ajoutera une valeur immédiate à votre équipe.";
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('language') || lowerInput.includes('compétence')) {
        response = lang === 'en'
          ? "She is proficient in PHP, Python, Java, C, and web technologies. She also speaks English, French, and Arabic fluently, and has basic knowledge of Korean (B2 understanding, reading and writing)!"
          : "Elle maîtrise PHP, Python, Java, C et les technologies web. Elle parle couramment anglais, français et arabe, et possède un niveau B2 en coréen (compréhension, lecture et écriture) !";
      } else if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('projet')) {
        response = lang === 'en'
          ? "She has worked on impressive projects including a Pharmacy Management System in C, a custom Automata Compiler, and a movie management platform called CozyWatch. Check out the Projects section!"
          : "Elle a travaillé sur des projets impressionnants, notamment un système de gestion de pharmacie en C, un compilateur d'automates personnalisé et une plateforme de films (CozyWatch). Consultez la section Projets !";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
        response = lang === 'en'
          ? "You can reach her via email at arbouni.maroua@etu.uae.ac.ma or connect with her on LinkedIn. Scroll down to the Contact section for quick links!"
          : "Vous pouvez la contacter par e-mail à l'adresse arbouni.maroua@etu.uae.ac.ma ou sur LinkedIn. Descendez jusqu'à la section Contact !";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('bonjour') || lowerInput.includes('salut')) {
        response = lang === 'en'
          ? "Hello there! What would you like to know about Maroua?"
          : "Bonjour ! Que souhaitez-vous savoir sur Maroua ?";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: response }]);
    }, 800);
  };

  const t = {
    en: {
      nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', toggleLang: 'EN' },
      hero: {
        greeting: "Hello, I'm",
        role: "AI & Digital Transformation Engineering Student",
        desc: "Equipped with strong analytical skills and expertise ranging from web development to enterprise architecture and artificial intelligence integration. Passionate about designing innovative digital platforms.",
        viewProjects: "View Projects",
        downloadCV: "Download CV",
        letsTalk: "Let's Talk",
        badge1: "Code Junkie",
        badge2: "Engineer To-Be"
      },
      skills: {
        title: "Technical Skills",
        prog: "Programming",
        frameworks: "Frameworks",
        arch: "Architecture",
        lang: "Languages",
        langList: "English, French, Arabic, Korean (B2 Level)"
      },
      projects: {
        title: "Completed Projects",
        viewMore: "View more"
      },
      contact: {
        title: "Ready to collaborate?",
        desc: "I am always open to new internship opportunities and projects."
      },
      ai: {
        placeholder: "Ask about Maroua..."
      }
    },
    fr: {
      nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', contact: 'Contact', toggleLang: 'FR' },
      hero: {
        greeting: "Bonjour, je suis",
        role: "Élève Ingénieure en IA & Transformation Digitale",
        desc: "Dotée de solides compétences analytiques et d'une expertise allant du développement web à l'architecture d'entreprise et l'intégration de l'IA. Passionnée par la conception de plateformes numériques innovantes.",
        viewProjects: "Voir les projets",
        downloadCV: "Télécharger CV",
        letsTalk: "Me contacter",
        badge1: "Code Junkie",
        badge2: "Future Ingénieure"
      },
      skills: {
        title: "Compétences Techniques",
        prog: "Programmation",
        frameworks: "Frameworks",
        arch: "Architecture",
        lang: "Langues",
        langList: "Anglais, Français, Arabe, Coréen (Niveau B2)"
      },
      projects: {
        title: "Projets Réalisés",
        viewMore: "Voir plus"
      },
      contact: {
        title: "Prêt à collaborer ?",
        desc: "Je suis toujours ouverte à de nouvelles opportunités de stage et de projets."
      },
      ai: {
        placeholder: "Posez une question sur Maroua..."
      }
    }
  };

  const projectsData = {
    en: [
      { title: 'Building Permit Platform', tech: 'Laravel, MySQL, Python (NLP), Taiga', desc: 'Accomplished full digitalization of building permit lifecycles by designing a comprehensive web platform featuring online submission and multi-actor validation.', icon: <Server size={24} /> },
      { title: 'Universal Data Analyzer', tech: 'Python, Pandas, Streamlit, SQLite', desc: 'Automated cross-file data consolidation and reporting for rapid insights by engineering a Python application that processes multiple Excel uploads.', icon: <Database size={24} /> },
      { title: 'CozyWatch', tech: 'Laravel, PHP, Bootstrap', desc: 'Developed a movie management platform using Laravel MVC, featuring full CRUD operations and a robust database schema.', icon: <FileCode size={24} /> },
      { title: 'MediControl (C)', tech: 'C, Linked Lists, File I/O', desc: 'Developed an application in C utilizing linked lists to handle pharmacy stock management, order tracking, and centralized low-stock notifications.', icon: <Terminal size={24} /> },
      { title: 'Boarding School Architecture', tech: 'ArchiMate, Zachman Framework', desc: 'Designed the enterprise architecture (AS-IS to TO-BE) for a boarding school platform covering student accommodation, secure payments, and BI reporting.', icon: <Briefcase size={24} /> },
      { title: 'Custom Automata Compiler', tech: 'C, Flex, Bison, Graphviz', desc: 'Created "Language A", a custom language compiled with Flex and Bison, designed to generate and simulate automata with semantic error detection.', icon: <Terminal size={24} /> }
    ],
    fr: [
      { title: 'Plateforme de Permis de Construire', tech: 'Laravel, MySQL, Python (NLP), Taiga', desc: 'Digitalisation complète du cycle de vie des permis de construire en concevant une plateforme web avec soumission en ligne et validation multi-acteurs.', icon: <Server size={24} /> },
      { title: 'Analyseur de Données Universel', tech: 'Python, Pandas, Streamlit, SQLite', desc: 'Automatisation de la consolidation de données inter-fichiers en développant une application Python qui traite plusieurs fichiers Excel pour générer des rapports unifiés.', icon: <Database size={24} /> },
      { title: 'CozyWatch', tech: 'Laravel, PHP, Bootstrap', desc: 'Développement d\'une plateforme de gestion de films avec Laravel MVC, incluant des opérations CRUD complètes et un schéma de base de données robuste.', icon: <FileCode size={24} /> },
      { title: 'MediControl (C)', tech: 'C, Listes Chaînées, Fichiers I/O', desc: 'Développement d\'une application en C utilisant des listes chaînées pour gérer les stocks de pharmacie, le suivi des commandes et les alertes de rupture de stock.', icon: <Terminal size={24} /> },
      { title: 'Architecture d\'Internat', tech: 'ArchiMate, Zachman Framework', desc: 'Conception de l\'architecture d\'entreprise (AS-IS vers TO-BE) pour une plateforme d\'internat couvrant l\'hébergement, les paiements et le reporting BI.', icon: <Briefcase size={24} /> },
      { title: 'Compilateur d\'Automates', tech: 'C, Flex, Bison, Graphviz', desc: 'Création de "Language A", un langage personnalisé compilé avec Flex et Bison, conçu pour générer et simuler des automates avec détection d\'erreurs sémantiques.', icon: <Terminal size={24} /> }
    ]
  };

  const currentT = t[lang];
  const currentProjects = projectsData[lang];

  return (
    <div className="portfolio-wrapper">
      {/* Navbar */}
      <nav className="glass-panel" style={{ margin: '1rem', padding: '1rem 2rem', position: 'sticky', top: '1rem', zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="font-accent" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>&lt;Portfolio/&gt;</div>
        
        <div style={{ display: 'flex', gap: '2rem', fontWeight: '500' }} className="nav-links">
          <a href="#about" className="hover-link">{currentT.nav.about}</a>
          <a href="#skills" className="hover-link">{currentT.nav.skills}</a>
          <a href="#projects" className="hover-link">{currentT.nav.projects}</a>
          <a href="#contact" className="hover-link">{currentT.nav.contact}</a>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="glass-button" onClick={toggleLang} aria-label="Langue">
            <Globe size={18} /> {currentT.nav.toggleLang}
          </button>
          <button className="glass-button" onClick={toggleTheme} aria-label="Thème">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="glass-button primary" onClick={() => setChatOpen(true)}>
            <MessageSquare size={18} /> Ask AI
          </button>
        </div>
      </nav>

      <main className="container" style={{ padding: '4rem 0' }}>
        
        {/* Hero Section */}
        <section id="about" style={{ display: 'flex', gap: '4rem', alignItems: 'center', marginBottom: '8rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <h3 className="font-accent" style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{currentT.hero.greeting}</h3>
            <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1rem' }}>Maroua Arbouni</h1>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>{currentT.hero.role}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px' }}>
              {currentT.hero.desc}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#projects" className="glass-button primary">{currentT.hero.viewProjects}</a>
              <a href="/cv_maroua.pdf" download className="glass-button" style={{ border: '1px solid var(--accent)' }}><Download size={18} /> {currentT.hero.downloadCV}</a>
              <a href="#contact" className="glass-button">{currentT.hero.letsTalk}</a>
            </div>
          </div>
          
          <div style={{ position: 'relative', width: '350px', height: '450px' }}>
            <div className="glass-panel animate-float" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', padding: '10px' }}>
              <img src={profilePic} alt="Maroua Arbouni" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            </div>
            {/* Floating Badges */}
            <div className="glass-panel animate-float-delayed font-accent" style={{ position: 'absolute', bottom: '-20px', left: '-40px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
              <Terminal size={20} color="var(--accent)"/> <span>{currentT.hero.badge1}</span>
            </div>
            <div className="glass-panel animate-float font-accent" style={{ position: 'absolute', top: '40px', right: '-60px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
              <Server size={20} color="var(--accent)"/> <span>{currentT.hero.badge2}</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>{currentT.skills.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.prog}</h3>
              <p>PHP, Python, Java (OOP), C, HTML, CSS</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.frameworks}</h3>
              <p>Laravel, Bootstrap, Linux, MySQL</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.arch}</h3>
              <p>ArchiMate, SWOT, PESTEL, Porter</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.lang}</h3>
              <p>{currentT.skills.langList}</p>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>{currentT.projects.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {currentProjects.map((project, index) => (
              <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{project.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p className="font-accent" style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>{project.tech}</p>
                <p style={{ flex: 1 }}>{project.desc}</p>
                <button className="glass-button" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>{currentT.projects.viewMore}</button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{currentT.contact.title}</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>{currentT.contact.desc}</p>
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
              <div key={idx} style={{ alignSelf: msg.sender === 'ai' ? 'flex-start' : 'flex-end', background: msg.sender === 'ai' ? 'var(--bg-glass-heavy)' : 'var(--accent)', color: msg.sender === 'ai' ? 'var(--text-main)' : '#fff', padding: '0.8rem', borderRadius: '12px', maxWidth: '85%', fontSize: '0.9rem', lineHeight: '1.4' }}>
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
              placeholder={currentT.ai.placeholder} 
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
