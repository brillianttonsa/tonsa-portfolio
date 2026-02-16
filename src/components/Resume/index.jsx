import { Cpu, Globe, Smartphone } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillStackSection from "./SkillStackSection";
import DownloadCVButton from "./DownloadCVButton";

const education = [
  { degree: "BSc in Computer Science", school: "Finalist Student UDSM", years: "2023 - 2026", desc: "Specializing in Software Architecture and Artificial Intelligence." },
  { degree: "Full Stack Web Development Bootcamp", school: "Udemy (Dr. Angela Yu Certification)", years: "2024 - 2025", desc: "Professional certification covering the Full stack, SQL, and modern web deployment." },
  { degree: "Python Engineering & Automation", school: "Advanced Certification", years: "2023 - 2026", desc: "Focused on Python programming, data structures, automation scripts, and foundational AI/ML." },
  { degree: "AI Agents & LLM Engineering", school: "Self-directed learning (udemy course)", years: "2025 - Present", desc: "Currently learning AI agents, LLM orchestration, RAG systems, and prompt engineering." },
];

const projectsAsExperience = [
  { role: "Full-Stack Engineer", company: "Maize Inventory SaaS System", years: "2025 - Current", desc: "Building a production-grade platform with React frontend, Node.js/Express backend, and SQL databases. Focused on maintainable architecture, testing, and CI/CD pipelines." },
  { role: "Frontend Engineer", company: "Dashboard & UI Projects", years: "2024 - 2025", desc: "Designing responsive frontends with React and Tailwind CSS. Building reusable components, integrating REST APIs, and implementing automated testing." },
  { role: "Backend Engineer", company: "API & Database Systems", years: "2024 - 2025", desc: "Architecting RESTful APIs and database schemas with Node.js and PostgreSQL. Learning DevOps basics, automation, and deployment practices." },
];

const skillCategories = [
  { title: "Frontend Development", icon: <Globe size={20} className="text-slate-900" />, skills: [{ name: "React / Next.js / Tailwind", percentage: 95 }, { name: "Responsive UI & UX", percentage: 70 }, { name: "REST APIs & Testing", percentage: 85 }] },
  { title: "Backend Engineering", icon: <Cpu size={20} className="text-slate-900" />, skills: [{ name: "Node.js / Express / SQL", percentage: 90 }, { name: "Database Design & Optimization", percentage: 65 }, { name: "CI/CD & DevOps Basics", percentage: 60 }] },
  { title: "AI & Modern Tech", icon: <Smartphone size={20} className="text-slate-900" />, skills: [{ name: "Python & AI Fundamentals", percentage: 80 }, { name: "Learning AI Agents & LLM", percentage: 55 }, { name: "System Architecture", percentage: 75 }] },
];

const ResumeAndCapability = () => (
  <section className="bg-white py-20 px-6 font-sans text-slate-900">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="bg-[#fde047] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Resume</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Capability Summary</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-32">
        <EducationSection education={education} />
        <ExperienceSection experiences={projectsAsExperience} />
      </div>

      <SkillStackSection categories={skillCategories} />
      <DownloadCVButton />
    </div>
  </section>
);

export default ResumeAndCapability;
