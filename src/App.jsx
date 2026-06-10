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
        ? "I'm not sure how to answer that. You can ask me about Maroua's skills, her projects, or why she would be a great IT intern!"
        : "Je ne suis pas sûr de savoir comment répondre. Vous pouvez m'interroger sur les compétences de Maroua, ses projets ou pourquoi elle ferait une excellente stagiaire en IT !";
      
      if (lowerInput.includes('stagiaire') || lowerInput.includes('intern') || lowerInput.includes('hire') || lowerInput.includes('why')) {
        response = lang === 'en'
          ? "Maroua is actively seeking an IT/Software Engineering PFA internship! As an AI & Digital Transformation engineering student, she brings hands-on experience in web systems (Laravel, PHP), process automation (Python, NLP), and enterprise architecture (ArchiMate, Zachman) — all directly applicable to digitizing workflows and internal IT systems."
          : "Maroua recherche activement un stage PFA en IT/Ingénierie Logicielle ! En tant qu'élève ingénieure en IA & Transformation Digitale, elle apporte une expérience pratique en systèmes web (Laravel, PHP), automatisation de processus (Python, NLP) et architecture d'entreprise (ArchiMate, Zachman) — directement applicable à la digitalisation des flux.";
      } else if (lowerInput.includes('bring') || lowerInput.includes('value') || lowerInput.includes('company') || lowerInput.includes('contribute') || lowerInput.includes('industrial') || lowerInput.includes('industrie')) {
        response = lang === 'en'
          ? "In an industrial setting, Maroua can contribute to digitizing internal processes, automating reporting (Python + Excel), building management dashboards, and supporting IT infrastructure. Her PFE management platform and Building Permit system demonstrate her ability to deliver production-ready web applications with complex workflows."
          : "Dans un environnement industriel, Maroua peut contribuer à la digitalisation des processus internes, l'automatisation de reportings (Python + Excel), la création de tableaux de bord et le support IT. Sa plateforme de gestion PFE et son système de permis de construire démontrent sa capacité à livrer des applications web complexes prêtes pour la production.";
      } else if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('language') || lowerInput.includes('compétence')) {
        response = lang === 'en'
          ? "She is proficient in PHP, Python, Java, C, JavaScript, and web technologies (Laravel, MySQL). For industrial IT roles, she also has enterprise architecture skills (ArchiMate, Zachman, UML, Merise) and experience with process automation and NLP. She speaks English, French, Arabic (native), and Korean (B2)!"
          : "Elle maîtrise PHP, Python, Java, C, JavaScript et les technologies web (Laravel, MySQL). Pour les rôles IT industriels, elle possède aussi des compétences en architecture d'entreprise (ArchiMate, Zachman, UML, Merise) et en automatisation. Elle parle anglais, français, arabe (natif) et coréen (B2) !";
      } else if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work') || lowerInput.includes('projet')) {
        response = lang === 'en'
          ? "Her key projects include a PFE Assignment & Management System (Laravel + MySQL), a Building Permit digitalization platform with NLP, a Universal Data Analyzer (Python + Streamlit), and a Custom Automata Compiler (C + Flex + Bison). Check out the Projects section for the full list!"
          : "Ses projets phares incluent un système de gestion des PFE (Laravel + MySQL), une plateforme de digitalisation des permis de construire avec NLP, un analyseur de données universel (Python + Streamlit) et un compilateur d'automates (C + Flex + Bison). Consultez la section Projets !";
      } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
        response = lang === 'en'
          ? "You can reach her via email at arbouni.maroua@etu.uae.ac.ma or connect with her on LinkedIn. Scroll down to the Contact section for quick links!"
          : "Vous pouvez la contacter par e-mail à l'adresse arbouni.maroua@etu.uae.ac.ma ou sur LinkedIn. Descendez jusqu'à la section Contact !";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('bonjour') || lowerInput.includes('salut')) {
        response = lang === 'en'
          ? "Hello there! What would you like to know about Maroua? You can ask about her skills, projects, or why she'd be a great IT intern!"
          : "Bonjour ! Que souhaitez-vous savoir sur Maroua ? Posez-moi des questions sur ses compétences, ses projets ou pourquoi elle ferait une excellente stagiaire IT !";
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
        desc: "Seeking an IT internship in an industrial environment. Experienced in full-stack web development, process automation, ERP concepts, and enterprise architecture. Ready to digitalize and optimize internal systems from day one.",
        viewProjects: "View Projects",
        downloadCV: "Download CV",
        letsTalk: "Let's Talk",
        badge1: "Code Junkie",
        badge2: "Engineer To-Be"
      },
      skills: {
        title: "Technical Skills",
        prog: "Programming",
        frameworks: "Frameworks & Tools",
        arch: "Architecture & Modeling",
        db: "Databases & Systems",
        lang: "Languages Spoken",
        langList: "Arabic (Native), French, English, Korean (B2)"
      },
      projects: {
        title: "Completed Projects",
        viewMore: "View on GitHub"
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
        desc: "À la recherche d'un stage IT en environnement industriel. Expérimentée en développement web full-stack, automatisation de processus, concepts ERP et architecture d'entreprise. Prête à digitaliser et optimiser les systèmes internes dès le premier jour.",
        viewProjects: "Voir les projets",
        downloadCV: "Télécharger CV",
        letsTalk: "Me contacter",
        badge1: "Code Junkie",
        badge2: "Future Ingénieure"
      },
      skills: {
        title: "Compétences Techniques",
        prog: "Programmation",
        frameworks: "Frameworks & Outils",
        arch: "Architecture & Modélisation",
        db: "Bases de données & Systèmes",
        lang: "Langues Parlées",
        langList: "Arabe (Natif), Français, Anglais, Coréen (Niveau B2)"
      },
      projects: {
        title: "Projets Réalisés",
        viewMore: "Voir sur GitHub"
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
      { title: 'PFE Assignment & Management System', tech: 'Laravel, MySQL, Bootstrap, JavaScript', desc: 'Engineered a full-stack web application automating student-supervisor assignments with Excel parsing and an automated defense scheduling module coordinating supervisors, juries, rooms and timeslots.', icon: <Briefcase size={24} />, github: null },
      { title: 'Building Permit Platform', tech: 'Laravel, MySQL, Python (NLP), Taiga', desc: 'Full digitalization of building permit lifecycles: online submission, multi-actor validation workflows, digital archiving, and NLP-powered document compliance verification.', icon: <Server size={24} />, github: null },
      { title: 'Universal Data Analyzer', tech: 'Python, Pandas, Streamlit, PySide6, SQLite', desc: 'Automated cross-file Excel consolidation with dynamic chart generation — delivered as both a desktop GUI (PySide6) and a web dashboard (Streamlit).', icon: <Database size={24} />, github: null },
      { title: 'Boarding School Architecture', tech: 'ArchiMate, Zachman Framework, SWOT, PESTEL', desc: 'Designed full enterprise architecture (AS-IS to TO-BE) for a boarding school platform covering accommodation, secure payments, maintenance ticketing, and BI reporting.', icon: <Briefcase size={24} />, github: null },
      { title: 'CozyWatch', tech: 'Laravel, PHP, Bootstrap', desc: 'Movie management platform using Laravel MVC with full CRUD, user authentication, and a robust relational database schema.', icon: <FileCode size={24} />, github: 'https://github.com/ELI1485/CozyWatch.git' },
      { title: 'MediControl (C)', tech: 'C, Linked Lists, File I/O', desc: 'Pharmacy stock management system in C with linked lists — handling inventory, order tracking, and automated low-stock notifications.', icon: <Terminal size={24} />, github: 'https://github.com/ELI1485/PHARMACY_MANAGEMENT.git' },
      { title: 'Custom Automata Compiler', tech: 'C, Flex, Bison, Graphviz', desc: 'Created "Language A", a custom language compiled with Flex and Bison, designed to generate and simulate automata with semantic error detection and Graphviz exports.', icon: <Terminal size={24} />, github: null }
    ],
    fr: [
      { title: 'Système de Gestion des PFE', tech: 'Laravel, MySQL, Bootstrap, JavaScript', desc: 'Application web full-stack automatisant l\'affectation étudiant-encadrant avec parsing Excel et un module de planification automatique des soutenances coordonnant jurys, salles et créneaux.', icon: <Briefcase size={24} />, github: null },
      { title: 'Plateforme de Permis de Construire', tech: 'Laravel, MySQL, Python (NLP), Taiga', desc: 'Digitalisation complète du cycle de vie des permis de construire : soumission en ligne, validation multi-acteurs, archivage numérique et vérification documentaire par NLP.', icon: <Server size={24} />, github: null },
      { title: 'Analyseur de Données Universel', tech: 'Python, Pandas, Streamlit, PySide6, SQLite', desc: 'Consolidation automatisée de fichiers Excel avec génération de graphiques — livré en interface desktop (PySide6) et tableau de bord web (Streamlit).', icon: <Database size={24} />, github: null },
      { title: 'Architecture d\'Internat', tech: 'ArchiMate, Zachman Framework, SWOT, PESTEL', desc: 'Architecture d\'entreprise complète (AS-IS vers TO-BE) pour une plateforme d\'internat couvrant hébergement, paiements sécurisés, tickets de maintenance et reporting BI.', icon: <Briefcase size={24} />, github: null },
      { title: 'CozyWatch', tech: 'Laravel, PHP, Bootstrap', desc: 'Plateforme de gestion de films avec Laravel MVC, CRUD complet, authentification utilisateur et schéma relationnel robuste.', icon: <FileCode size={24} />, github: 'https://github.com/ELI1485/CozyWatch.git' },
      { title: 'MediControl (C)', tech: 'C, Listes Chaînées, Fichiers I/O', desc: 'Système de gestion de stocks de pharmacie en C avec listes chaînées — inventaire, suivi des commandes et alertes automatiques de rupture.', icon: <Terminal size={24} />, github: 'https://github.com/ELI1485/PHARMACY_MANAGEMENT.git' },
      { title: 'Compilateur d\'Automates', tech: 'C, Flex, Bison, Graphviz', desc: 'Création de "Language A", un langage personnalisé compilé avec Flex et Bison pour générer et simuler des automates avec détection d\'erreurs sémantiques.', icon: <Terminal size={24} />, github: null }
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
              <p>PHP, Python, Java (OOP), C, JavaScript, HTML, CSS</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.frameworks}</h3>
              <p>Laravel, Bootstrap, Streamlit, PySide6, Git, Taiga, Linux</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.db}</h3>
              <p>MySQL, SQLite, ERP Concepts, Information Systems</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 className="font-accent" style={{ marginBottom: '1rem', color: 'var(--accent)', fontSize: '1.5rem' }}>{currentT.skills.arch}</h3>
              <p>ArchiMate, Zachman, UML, Merise, SWOT, PESTEL, Porter</p>
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
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="glass-button" style={{ marginTop: '1.5rem', alignSelf: 'flex-start', textDecoration: 'none' }}>
                    {currentT.projects.viewMore}
                  </a>
                )}
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
