import { Layout, Smartphone, BrainCircuit, Database, LineChart, Cpu } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Frontend Engineering",
    icon: <Layout size={42} />,
    desc: "Building dynamic, component-based applications with React and Next.js. Clean, reusable code with responsive UI design using Tailwind CSS."
  },
  {
    title: "Backend Development",
    icon: <Database size={42} />,
    desc: "Architecting scalable APIs with Node.js and Express. Database design, optimization, and secure server-side logic with PostgreSQL."
  },
  {
    title: "Clean Code & Testing",
    icon: <Cpu size={42} />,
    desc: "Writing maintainable code with automated testing frameworks. Implementing best practices for code quality, documentation, and long-term maintainability."
  },
  {
    title: "CI/CD & Deployment",
    icon: <BrainCircuit size={42} />,
    desc: "Building automated pipelines for continuous integration and deployment. Understanding DevOps basics and application lifecycle management."
  },
  {
    title: "Full-Stack Integration",
    icon: <LineChart size={42} />,
    desc: "Designing cohesive solutions where frontend and backend seamlessly work together. API contracts, error handling, and performance optimization."
  },
  {
    title: "AI Exploration",
    icon: <Smartphone size={42} />,
    desc: "Continuously learning AI/ML concepts and exploring how to integrate AI-powered features into modern web applications."
  }
];

const SkillsSection = () => (
  <section className="bg-white py-24 px-6 font-sans">
    <div className="max-w-6xl mx-auto text-center">
      <SectionHeader
        badge="Technical Expertise"
        title={<>Full-Stack Engineering with <span className="text-[#facc15]">Clean Code</span></>}
        subtitle="I combine frontend and backend expertise to build scalable, maintainable solutions. Strong focus on testing, CI/CD, and exploring how AI can enhance modern web applications."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mt-8">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
