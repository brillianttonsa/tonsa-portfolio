import maizeImg from '../../assets/maize-inventory-ai.png';
import toDoImg from '../../assets/to-do.png';
import taskManagerImg from '../../assets/task-manager.png';
import afyaLinkImg from '../../assets/afya-link.png';
import sisalImg from '../../assets/sisal-project.png';
import smartAdminImg from '../../assets/smart-admin.png';
import portfolioImg from '../../assets/portfolio.png';

export const projects = [
    {
        title: "Tonsa Portfolio",
        category: "Frontend Web",
        status: "Live",
        desc: "A modern personal portfolio showcasing skills, resume, and project deployments. Built with a clean component architecture, responsive design, and interactive project modals.",
        features: ["Hero with typing effect & scroll indicator", "Resume section with skill charts (Recharts) & PDF export", "Project showcase with modal details & future vision section", "Responsive header with mobile menu & backdrop blur", "FAQ, Contact, and polished Tailwind styling"],
        tech: ["React 19", "Vite", "Tailwind CSS v4", "Recharts", "jsPDF", "lucide-react"],
        image: portfolioImg,
        link: "#"
    },
    {
        title: "Maize Inventory AI",
        category: "Full-Stack & AI",
        status: "In Development",
        desc: "A predictive analytics platform for agro-dealers to manage grain stock and anticipate market shortages using machine learning.",
        features: ["Demand forecasting via Scikit-learn", "Real-time stock depletion tracking", "Supplier lead-time analytics", "Automated reorder point alerts"],
        tech: ["React", "Python", "Scikit-learn", "Supabase", "Tailwind"],
        image: maizeImg,
        link: "https://maize-inventory-system.vercel.app/"
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
];


export const futureProjects = [
  
    {
      title: "Sisal Farm Management System (SFMS)",
      category: "Full-Stack Web App",
      status: "Future Vision",
      desc: "A lightweight farm management platform designed to help sisal farmers track daily operations, maintain historical records, manage expenses, assign tasks, and plan future farm activities — all in one place. Reduces operational chaos, improves record-keeping, and increases efficiency at every stage of sisal farming.",
      features: [
        "Farm Visit Log & Observations",
        "Expense Tracking & Categorization",
        "Task & Worker Management",
        "Future Planning & To-Do Lists",
        "Dashboard with Quick Overview",
        "Searchable History & Reports"
      ],
      tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Vitest", "GitHub Actions"],
      image: sisalImg,
      link: "#",
      isFuture: true,
      details: {
        keyFeatures: [
          {
            name: "Farm Visit Log",
            desc: "Record every farm visit with date, section/block, observations, photos, and actions taken. Track follow-ups and maintain a searchable history of all visits."
          },
          {
            name: "Expense Tracking",
            desc: "Track daily and monthly costs for labor, tools, transport, fertilizers, and machinery. Categorize expenses, attach notes, and generate simple reports to analyze farm spending."
          },
          {
            name: "Task & Worker Management",
            desc: "Assign tasks to workers with deadlines and status (Pending / Completed). Keep notes for each task and track worker performance."
          },
          {
            name: "Future Planning & To-Do Lists",
            desc: "Plan upcoming farm activities such as planting, land clearing, or irrigation setup. Maintain a to-do list for long-term farm operations and strategy."
          },
          {
            name: "Dashboard",
            desc: "Quick overview of pending tasks, recent visits, and total expenses. Visual summaries to make decision-making faster and easier."
          }
        ],
        technical: {
          frontend: "React + Vite (component-based pages for Dashboard, Visits, Expenses, Tasks)",
          backend: "Node.js + Express + PostgreSQL (relational DB for structured farm data)",
          database: ["farm_blocks — identifies sections of your farm", "visit_logs — tracks observations and actions", "expenses — records all farm-related spending", "tasks — manages worker tasks and statuses", "plans — stores strategic future plans"],
          optimization: "Indexing on key columns like date and status for faster queries",
          testing: "Vitest + React Testing Library for frontend component testing",
          cicd: "GitHub Actions to run tests and ensure consistent deployment"
        },
        valueProposition: [
          "Reduces operational confusion for small- to medium-scale sisal farmers",
          "Provides an organized historical record of all farm activities",
          "Helps manage expenses and optimize resource allocation",
          "Improves productivity by tracking worker tasks and progress",
          "Scalable: can later include yield prediction, weather tracking, or multi-farm management"
        ]
      }
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
    {
    title: "Smart Admin Panel",
    category: "Full-Stack Web App",
    status: "Future Vision",
    desc: "A React multi-page admin/dashboard application with public pages and protected dashboard features. Provides authenticated user flows, role-based protected routes, dashboards with charts and reports, form validation, notifications, and site-wide theming — all designed to manage students, fees, and administrative workflows efficiently.",
    features: [
        "Public landing pages and information sections",
        "Protected dashboard for authenticated users",
        "Role-based access control",
        "Analytics & reports with charts",
        "Student/worker profile and settings management",
        "Notifications and site-wide theming",
        "Form handling with validation schemas"
    ],
    tech: [
        "React (v19), Vite, ESLint",
        "react-router-dom",
        "Zustand (state management)",
        "react-hook-form + Zod (forms & validation)",
        "Axios + date-fns (data handling)",
        "Tailwind CSS, clsx, lucide-react (UI & icons)",
        "Recharts (charts)",
        "Sonner (notifications)",
        "Vitest + Testing Library (testing)",
        "@vitejs/plugin-react, PostCSS, Autoprefixer (build/dev)"
    ],
    image: smartAdminImg, // replace with your image variable
    link: "#",
    isFuture: true,
    details: {
        keyFeatures: [
            {
                name: "Authentication & Role-based Access",
                desc: "Secure login/register flows with protected routes for different user roles."
            },
            {
                name: "Dashboard & Analytics",
                desc: "Displays charts and reports for fees, payments, and student/workflow management."
            },
            {
                name: "Form Handling & Validation",
                desc: "Forms handled using react-hook-form with Zod schemas for proper validation."
            },
            {
                name: "Notifications & Theming",
                desc: "Site-wide notifications for users and configurable theming across pages."
            },
            {
                name: "State Management & API Data",
                desc: "Uses Zustand for lightweight global/local state management and Axios for data fetching."
            }
        ],
        technical: {
            frontend: "React + Vite (component-based pages for Dashboard, Analytics, Profiles, Forms)",
            backend: "Node.js + Express + PostgreSQL (relational DB for students, fees, and workflows)",
            database: [
                "students — stores student profiles and class info",
                "fees — stores payment details, dues, and receipts",
                "users — stores admin/accountant/staff login and roles",
                "notifications — stores alerts and messages",
                "forms — stores submitted forms for validation and reporting"
            ],
            optimization: "Indexing key columns like student_id, role, and payment status for faster queries",
            testing: "Vitest + Testing Library for frontend component/unit testing",
            cicd: "GitHub Actions to run tests and ensure consistent deployment"
        },
        valueProposition: [
            "Automates student fee management and reporting",
            "Reduces manual errors and administrative overhead",
            "Provides clear dashboards for decision-making",
            "Ensures secure role-based access to sensitive data",
            "Scalable: can add more modules like attendance, grades, or notifications"
        ]
    }
}
];