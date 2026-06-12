export const skillGroups = [
  { key: 'prog', icon: 'code', chips: ['PHP', 'Python', 'Java (OOP)', 'C', 'JavaScript', 'HTML', 'CSS'] },
  { key: 'frameworks', icon: 'wrench', chips: ['Laravel', 'Bootstrap', 'Streamlit', 'PySide6', 'Git', 'Taiga', 'Linux'] },
  { key: 'db', icon: 'database', chips: ['MySQL', 'SQLite', 'ERP Concepts', 'Information Systems', 'openPLC'] },
  { key: 'arch', icon: 'layers', chips: ['ArchiMate', 'Zachman', 'UML', 'Merise', 'SWOT', 'PESTEL', 'Porter'] },
];

export const marqueeItems = [
  'Laravel', 'Python', 'NLP', 'MySQL', 'Process Automation', 'ArchiMate', 'Streamlit',
  'Enterprise Architecture', 'Java', 'C', 'ERP', 'Industry 4.0', 'Git', 'Linux',
];

export const projects = {
  en: [
    { title: 'PFE Assignment & Management System', tech: 'Laravel · MySQL · Bootstrap · JavaScript', desc: 'Full-stack platform automating student–supervisor assignments under equitable constraints, with Excel parsing across 3 majors and an automated defense scheduler coordinating juries, rooms, and timeslots.', icon: 'briefcase', github: null, featured: true },
    { title: 'Building Permit Platform', tech: 'Laravel · MySQL · Python (NLP) · Taiga', desc: 'End-to-end digitalization of building permit lifecycles: online submission, multi-actor validation workflows, digital archiving, and NLP-powered document compliance checks.', icon: 'server', github: null, featured: true },
    { title: 'Universal Data Analyzer', tech: 'Python · Pandas · Streamlit · PySide6 · SQLite', desc: 'Consolidates multiple Excel uploads into unified summaries with dynamic charts — shipped as both a desktop GUI and a web dashboard.', icon: 'database', github: null },
    { title: 'Boarding School Architecture', tech: 'ArchiMate · Zachman · SWOT · PESTEL', desc: 'Full enterprise architecture (AS-IS → TO-BE) for a boarding school platform: accommodation, secure payments, maintenance ticketing, BI reporting.', icon: 'layers', github: null },
    { title: 'CozyWatch', tech: 'Laravel · PHP · Bootstrap', desc: 'Movie management platform on Laravel MVC with full CRUD, authentication, and a robust relational schema.', icon: 'film', github: 'https://github.com/ELI1485/CozyWatch.git' },
    { title: 'MediControl', tech: 'C · Linked Lists · File I/O', desc: 'Pharmacy stock manager in C using linked lists — inventory, order tracking, automated low-stock alerts.', icon: 'terminal', github: 'https://github.com/ELI1485/PHARMACY_MANAGEMENT.git' },
    { title: 'Custom Automata Compiler', tech: 'C · Flex · Bison · Graphviz', desc: '“Language A”, a custom language compiled with Flex & Bison that generates and simulates automata with semantic error detection and Graphviz exports.', icon: 'cpu', github: null },
  ],
  fr: [
    { title: 'Système de Gestion des PFE', tech: 'Laravel · MySQL · Bootstrap · JavaScript', desc: 'Plateforme full-stack automatisant l’affectation étudiant–encadrant sous contraintes équitables, avec parsing Excel sur 3 filières et planification automatique des soutenances (jurys, salles, créneaux).', icon: 'briefcase', github: null, featured: true },
    { title: 'Plateforme de Permis de Construire', tech: 'Laravel · MySQL · Python (NLP) · Taiga', desc: 'Digitalisation complète du cycle de vie des permis : soumission en ligne, workflows de validation multi-acteurs, archivage numérique et vérification documentaire par NLP.', icon: 'server', github: null, featured: true },
    { title: 'Analyseur de Données Universel', tech: 'Python · Pandas · Streamlit · PySide6 · SQLite', desc: 'Consolide plusieurs fichiers Excel en synthèses unifiées avec graphiques dynamiques — livré en GUI desktop et tableau de bord web.', icon: 'database', github: null },
    { title: 'Architecture d’Internat', tech: 'ArchiMate · Zachman · SWOT · PESTEL', desc: 'Architecture d’entreprise complète (AS-IS → TO-BE) : hébergement, paiements sécurisés, tickets de maintenance, reporting BI.', icon: 'layers', github: null },
    { title: 'CozyWatch', tech: 'Laravel · PHP · Bootstrap', desc: 'Plateforme de gestion de films sur Laravel MVC : CRUD complet, authentification et schéma relationnel robuste.', icon: 'film', github: 'https://github.com/ELI1485/CozyWatch.git' },
    { title: 'MediControl', tech: 'C · Listes Chaînées · Fichiers I/O', desc: 'Gestion de stocks de pharmacie en C avec listes chaînées — inventaire, suivi des commandes, alertes de rupture automatiques.', icon: 'terminal', github: 'https://github.com/ELI1485/PHARMACY_MANAGEMENT.git' },
    { title: 'Compilateur d’Automates', tech: 'C · Flex · Bison · Graphviz', desc: '« Language A », un langage personnalisé compilé avec Flex & Bison pour générer et simuler des automates avec détection d’erreurs sémantiques et exports Graphviz.', icon: 'cpu', github: null },
  ],
};

export const links = {
  email: 'arbouni.maroua@etu.uae.ac.ma',
  github: 'https://github.com/ELI1485',
  linkedin: 'https://www.linkedin.com/in/maroua-arbouni-515312334/',
  cv: '/cv_maroua.pdf',
};
