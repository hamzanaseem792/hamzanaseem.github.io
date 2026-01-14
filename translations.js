// ============================================
// Translations for Portfolio - Complete
// ============================================

const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      guestbook: "Guestbook",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, my name is",
      title: "I build ML & LLM systems.",
      description: "I'm a Machine Learning Engineer specializing in <strong>NLP, RAG, and LLM systems</strong>. I build production-ready solutions with a focus on reliability, evaluation, and measurable business impact."
    },
    about: {
      title: "About Me",
      p1: "Hello! I'm Hamza, a Machine Learning Engineer based in Würzburg, Germany. I'm passionate about building production-ready NLP and LLM systems that solve real business problems.",
      p2: "My expertise lies in <strong>RAG architectures</strong>, <strong>semantic search</strong>, and <strong>multi-agent workflows</strong> that deliver measurable business value. I focus on reliability, evaluation, and efficiency—transforming research into scalable solutions.",
      p3: "Currently pursuing a Master's in Machine Learning at JMU Würzburg, I work on applied ML systems and have experience building production frameworks that reduce costs and improve performance.",
      skillsTitle: "Here are some technologies I work with:"
    },
    experience: {
      title: "Where I've Worked",
      current: "Present",
      mlEngineer: "Machine Learning Engineer",
      softwareEngineer: "Software Engineer",
      at: "@",
      mlJob1: "Developed a production multi-agent ML framework using LangGraph and PyTorch for neural architecture search, <strong>reducing GPU waste by 60–80%</strong> and <strong>improving throughput by ~10×</strong>",
      mlJob2: "Fine-tuned Qwen-7B with LoRA adapters to predict neural architecture performance, achieving <strong>5–18% MAPE</strong> and accelerating model selection decisions",
      mlJob3: "Designed GPU resource management system to coordinate parallel generator and predictor agents",
      mlJob4: "Built prompt-based evaluation pipeline enabling rapid domain adaptation without manual feature engineering",
      swJob1: "Built and maintained frontend components using React and JavaScript, integrated with backend APIs",
      swJob2: "Contributed to data-focused projects involving data cleaning, validation, and structured preparation for analytics",
      swJob3: "Developed and supported dashboards in Power BI to visualize key business metrics for internal stakeholders",
      swJob4: "Assisted with data pipelines and automation scripts to improve data flow between application and database layers"
    },
    projects: {
      title: "Some Things I've Built",
      featured: "Featured Project",
      nerTitle: "Automotive NER System",
      nerDesc: "Built a production-ready NER system for automotive technical documents with limited public data. Created custom annotated dataset with augmentation, achieving high precision entity extraction.",
      ner1: "Extracted <strong>5 entity types</strong> from automotive documents",
      ner2: "Custom dataset (IOB) + augmentation (<strong>+500 examples</strong>)",
      ner3: "Fine-tuned BERT-base-cased: <strong>87% F1</strong> (89% precision, 85% recall)",
      ner4: "Deployed Streamlit demo for real-time extraction",
      searchTitle: "Medical Semantic Search Engine",
      searchDesc: "Built a diabetes-focused information retrieval system comparing dense and sparse retrieval methods. Evaluated trade-offs between SBERT embeddings and BM25 for domain-specific medical content.",
      search1: "Built IR system with <strong>200+ document</strong> corpus (CDC/WHO sources)",
      search2: "Compared SBERT vs BM25: <strong>MRR@10 0.26 vs 0.08</strong>, <strong>Recall@10 0.30 vs 0.19</strong>",
      search3: "Handled SBERT's 512-token limit via chunk optimization + evaluation framework",
      search4: "Comprehensive evaluation comparing retrieval approaches"
    },
    services: {
      title: "What I Can Deliver",
      rag: {
        title: "RAG & Semantic Search Systems",
        subtitle: "Company knowledge → ingestion → retrieval → trusted answers",
        item1: "Document ingestion + intelligent chunking strategies",
        item2: "Sparse vs dense retrieval trade-offs (BM25 vs embeddings)",
        item3: "Vector search with FAISS and other vector DBs",
        item4: "Evaluation: relevance, correctness, failure-mode handling"
      },
      nlp: {
        title: "NLP Pipelines & Fine-tuning",
        subtitle: "Raw text → dataset → model → deployment",
        item1: "Dataset creation & cleaning for real-world data",
        item2: "Tokenization alignment & sequence labeling (NER)",
        item3: "Fine-tuning transformers with measurable metrics",
        item4: "Lightweight demos (Streamlit) for quick validation"
      },
      agents: {
        title: "AI Agents & Workflow Automation",
        subtitle: "Reliable agentic workflows with engineering rigor",
        item1: "LangGraph-based multi-agent orchestration",
        item2: "Guardrails: validation, fallbacks, uncertainty handling",
        item3: "API integration and operational pipelines"
      },
      data: {
        title: "Data Engineering & Reporting",
        subtitle: "Raw data → clean analytics → actionable insights",
        item1: "Data cleaning, validation, and structured preparation",
        item2: "Dashboards & reporting in Power BI",
        item3: "SQL-first thinking and reproducible transformations"
      }
    },
    certifications: {
      title: "Certifications"
    },
    guestbook: {
      title: "Visitor Guestbook",
      text: "Leave your name to be remembered! (Optional)",
      placeholder: "Your name (optional)",
      submit: "Save My Name",
      note: "Your visit is automatically tracked as a unique visitor. This is just to personalize your experience."
    },
    contact: {
      title: "Get In Touch",
      text: "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      sayHello: "Say Hello"
    },
    footer: {
      text: "Designed & Built by Hamza Naseem"
    }
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte",
      services: "Leistungen",
      guestbook: "Gästebuch",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, mein Name ist",
      title: "Ich entwickle ML & LLM Systeme.",
      description: "Ich bin ein Machine Learning Engineer, spezialisiert auf <strong>NLP, RAG und LLM-Systeme</strong>. Ich entwickle produktionsreife Lösungen mit Fokus auf Zuverlässigkeit, Evaluierung und messbarem Geschäftswert."
    },
    about: {
      title: "Über mich",
      p1: "Hallo! Ich bin Hamza, ein Machine Learning Engineer aus Würzburg, Deutschland. Ich bin leidenschaftlich daran interessiert, produktionsreife NLP- und LLM-Systeme zu entwickeln, die echte Geschäftsprobleme lösen.",
      p2: "Meine Expertise liegt in <strong>RAG-Architekturen</strong>, <strong>semantischer Suche</strong> und <strong>Multi-Agent-Workflows</strong>, die messbaren Geschäftswert liefern. Ich konzentriere mich auf Zuverlässigkeit, Evaluierung und Effizienz – die Transformation von Forschung in skalierbare Lösungen.",
      p3: "Derzeit absolviere ich einen Master in Machine Learning an der JMU Würzburg und arbeite an angewandten ML-Systemen. Ich habe Erfahrung im Aufbau von Produktionsframeworks, die Kosten senken und die Leistung verbessern.",
      skillsTitle: "Hier sind einige Technologien, mit denen ich arbeite:"
    },
    experience: {
      title: "Wo ich gearbeitet habe",
      current: "Aktuell",
      mlEngineer: "Machine Learning Engineer",
      softwareEngineer: "Software Engineer",
      at: "bei",
      mlJob1: "Entwicklung eines produktionsreifen Multi-Agent-ML-Frameworks mit LangGraph und PyTorch für Neural Architecture Search, <strong>Reduzierung des GPU-Verschleisses um 60–80%</strong> und <strong>Steigerung des Durchsatzes um ~10×</strong>",
      mlJob2: "Fine-Tuning von Qwen-7B mit LoRA-Adaptern zur Vorhersage der Neural-Architektur-Performance, Erreichen von <strong>5–18% MAPE</strong> und Beschleunigung von Modellauswahlentscheidungen",
      mlJob3: "Entwicklung eines GPU-Ressourcenmanagementsystems zur Koordination paralleler Generator- und Prädiktor-Agenten",
      mlJob4: "Aufbau einer Prompt-basierten Evaluierungspipeline für schnelle Domänenanpassung ohne manuelle Feature-Engineering",
      swJob1: "Entwicklung und Wartung von Frontend-Komponenten mit React und JavaScript, Integration mit Backend-APIs",
      swJob2: "Beitrag zu datenorientierten Projekten mit Datenbereinigung, Validierung und strukturierter Vorbereitung für Analysen",
      swJob3: "Entwicklung und Unterstützung von Dashboards in Power BI zur Visualisierung wichtiger Geschäftskennzahlen für interne Stakeholder",
      swJob4: "Unterstützung bei Datenpipelines und Automatisierungsskripten zur Verbesserung des Datenflusses zwischen Anwendung und Datenbankebene"
    },
    projects: {
      title: "Einige Dinge, die ich gebaut habe",
      featured: "Ausgewähltes Projekt",
      nerTitle: "Automotive NER System",
      nerDesc: "Entwicklung eines produktionsreifen NER-Systems für automobiltechnische Dokumente mit begrenzten öffentlichen Daten. Erstellung eines benutzerdefinierten annotierten Datensatzes mit Augmentierung, Erreichen einer hohen Präzision bei der Entitätsextraktion.",
      ner1: "Extraktion von <strong>5 Entitätstypen</strong> aus automobiltechnischen Dokumenten",
      ner2: "Benutzerdefinierter Datensatz (IOB) + Augmentierung (<strong>+500 Beispiele</strong>)",
      ner3: "Fine-Tuning von BERT-base-cased: <strong>87% F1</strong> (89% Präzision, 85% Recall)",
      ner4: "Bereitstellung einer Streamlit-Demo für Echtzeit-Extraktion",
      searchTitle: "Medizinisches Semantisches Suchsystem",
      searchDesc: "Entwicklung eines diabetesorientierten Informationsabrufsystems, das dichte und spärliche Abrufmethoden vergleicht. Evaluierung der Kompromisse zwischen SBERT-Embeddings und BM25 für domänenspezifische medizinische Inhalte.",
      search1: "Aufbau eines IR-Systems mit <strong>200+ Dokumenten</strong> Korpus (CDC/WHO-Quellen)",
      search2: "Vergleich SBERT vs BM25: <strong>MRR@10 0.26 vs 0.08</strong>, <strong>Recall@10 0.30 vs 0.19</strong>",
      search3: "Bewältigung der 512-Token-Grenze von SBERT durch Chunk-Optimierung + Evaluierungsframework",
      search4: "Umfassende Evaluierung zum Vergleich von Abrufansätzen"
    },
    services: {
      title: "Was ich liefern kann",
      rag: {
        title: "RAG & Semantische Suchsysteme",
        subtitle: "Unternehmenswissen → Erfassung → Abruf → vertrauenswürdige Antworten",
        item1: "Dokumentenerfassung + intelligente Chunking-Strategien",
        item2: "Kompromisse zwischen spärlichem und dichtem Abruf (BM25 vs Embeddings)",
        item3: "Vektorsuche mit FAISS und anderen Vektor-DBs",
        item4: "Evaluierung: Relevanz, Korrektheit, Fehlermodusbehandlung"
      },
      nlp: {
        title: "NLP-Pipelines & Fine-tuning",
        subtitle: "Rohtext → Datensatz → Modell → Bereitstellung",
        item1: "Datensatzerstellung & Bereinigung für reale Daten",
        item2: "Tokenisierungsausrichtung & Sequenzlabeling (NER)",
        item3: "Fine-Tuning von Transformern mit messbaren Metriken",
        item4: "Leichtgewichtige Demos (Streamlit) für schnelle Validierung"
      },
      agents: {
        title: "KI-Agenten & Workflow-Automatisierung",
        subtitle: "Zuverlässige agentische Workflows mit technischer Strenge",
        item1: "LangGraph-basierte Multi-Agent-Orchestrierung",
        item2: "Schutzmaßnahmen: Validierung, Fallbacks, Unsicherheitsbehandlung",
        item3: "API-Integration und operative Pipelines"
      },
      data: {
        title: "Datenengineering & Reporting",
        subtitle: "Rohdaten → saubere Analysen → umsetzbare Erkenntnisse",
        item1: "Datenbereinigung, Validierung und strukturierte Vorbereitung",
        item2: "Dashboards & Reporting in Power BI",
        item3: "SQL-First-Denken und reproduzierbare Transformationen"
      }
    },
    certifications: {
      title: "Zertifizierungen"
    },
    guestbook: {
      title: "Besucher-Gästebuch",
      text: "Hinterlasse deinen Namen, um in Erinnerung zu bleiben! (Optional)",
      placeholder: "Dein Name (optional)",
      submit: "Namen speichern",
      note: "Dein Besuch wird automatisch als eindeutiger Besucher erfasst. Dies dient nur zur Personalisierung deiner Erfahrung."
    },
    contact: {
      title: "Kontakt aufnehmen",
      text: "Ich suche derzeit nach neuen Möglichkeiten, mein Postfach ist immer offen. Ob Sie eine Frage haben oder nur Hallo sagen möchten, ich werde mein Bestes tun, um Ihnen zu antworten!",
      sayHello: "Hallo sagen"
    },
    footer: {
      text: "Entworfen & Entwickelt von Hamza Naseem"
    }
  }
};



