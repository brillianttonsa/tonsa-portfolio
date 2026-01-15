import maizeImg from '../../assets/maize-inventory-ai.png';
import toDoImg from '../../assets/to-do.png';
import taskManagerImg from '../../assets/task-manager.png';
import afyaLinkImg from '../../assets/afya-link.png';
import sisalImg from '../../assets/sisal-project.png';
import agriTrust from '../../assets/agritrust.png';
import fieldsenseImg from '../../assets/field-sense-ai.png';

export const projects = [
    {
        title: "Maize Inventory AI (SaaS)",
        category: "Full-Stack & AI",
        status: "In Development",
        desc: "A predictive analytics platform for agro-dealers to manage grain stock and anticipate market shortages using machine learning.",
        features: ["Demand forecasting via Scikit-learn", "Real-time stock depletion tracking", "Supplier lead-time analytics", "Automated reorder point alerts"],
        tech: ["React", "Python", "Scikit-learn", "Supabase", "Tailwind"],
        image: maizeImg,
        link: "#"
    },
    {
    title: "Task Management Tool",
    category: "Full-Stack Web",
    status: "Live",
    desc: "An enterprise-grade productivity suite focused on team collaboration and real-time state synchronization.",
    features: ["Optimistic UI updates", "Drag-and-drop task kanban", "Multi-user real-time sync", "Advanced activity logging"],
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: taskManagerImg,
    link: "https://task-manager-app-three-mauve.vercel.app/"
    },
    {
    title: "Secure Auth To-Do",
    category: "Web App (2025)",
    status: "Live",
    desc: "A high-security task tracker implementing modern authentication patterns and encrypted database storage.",
    features: ["OAuth 2.0 / Magic Link Login", "Row-Level Security (RLS)", "Automated database backups", "Dark-mode optimized UI"],
    tech: ["Next.js", "Supabase Auth", "PostgreSQL", "Framer Motion"],
    image: toDoImg,
    link: "https://to-do-app-kappa-gules.vercel.app/"
    },
    {
    title: "Python Automation Engine",
    category: "Automation / AI",
    status: "Live",
    desc: "A collection of headless scripts designed to scrape, clean, and visualize large agricultural datasets for market research.",
    features: ["Multi-threaded web scraping", "Data cleaning with Pandas", "Automated CSV/Excel reporting", "Email notification triggers"],
    tech: ["Python", "Pandas", "BeautifulSoup", "Matplotlib"],
    image: pythonAutomationImg,
    link: "#"
    },
];


export const futureProjects = [
  {
      title: "AgriTrust Platform",
      category: "Agriculture Fintech",
      status: "Future Vision",
      desc: "A trust-based aggregation model using Islamic Finance (Salam) to fund and supervise farmers for consistent quality bulk supply.",
      features: ["Salam Contract Engine", "Input Allocation Tracking", "Trust-Based Scoring", "Bulk Buyer Portal"],
      tech: ["Blockchain", "Node.js", "Islamic Finance Logic"],
      image: agriTrust,
      link: "#",
      isFuture: true
    },
    {
      title: "The Sisal Project",
      category: "Supply Chain ERP",
      status: "Future Vision",
      desc: "ERP system for the sisal industry managing the lifecycle from plantation mapping to fiber export documentation.",
      features: ["Plantation Mapping", "Harvest Scheduling", "Quality Grading", "Export Tracking"],
      tech: ["React Native", "PostgreSQL", "Cloud Architecture"],
      image: sisalImg,
      link: "#",
      isFuture: true
    },
    {
        title: "FieldSense AI",
        category: "Mobile AI & LLM",
        status: "Future Vision",
        desc: "A mobile-first 'AI Field Supervisor' that converts natural voice reports from workers into structured business intelligence using LLM function calling.",
        features: [
            "Voice-to-Structured-Data Engine",
            "Offline-first reporting architecture",
            "AI-driven risk & anomaly detection",
            "Multi-lingual LLM processing"
        ],
        tech: ["Flutter", "Python", "LangChain", "Node.js"],
        image: fieldsenseImg,
        link: "#",
        isFuture: true
    },
    {
        title: "Afya-Link",
        category: "HealthTech / Hybrid",
        status: "Future Vision",
        desc: "A hybrid healthcare ecosystem connecting a patient mobile app with a hospital web portal, featuring AI-driven symptom triage and medical report summarization.",
        features: [
            "Web Portal for EMR & Hospital Analytics",
            "Patient Mobile App for Appts & History",
            "LLM-powered Symptom-to-Suggestion engine",
            "Automated Medical Report Summarization"
        ],
        tech: ["React / Node.js", "React Native", "Python / LangChain", "PostgreSQL"],
        // Professional image representing a clean, modern digital health interface
        image: afyaLinkImg,
        link: "#",
        isFuture: true
    },
];