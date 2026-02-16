import { Layout, Smartphone, BrainCircuit, Database, LineChart, Cpu } from 'lucide-react';

const SkillsSection = () => {
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

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        <span className="bg-[#fde047] text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em]">
          Technical Expertise
        </span>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-8 mb-8">
          Full-Stack Engineering with <span className="text-[#facc15]">Clean Code</span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mb-24">
          I combine frontend and backend expertise to build scalable, maintainable solutions. 
          Strong focus on testing, CI/CD, and exploring how AI can enhance modern web applications.
        </p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Permanent Yellow Icon with subtle background pulse */}
              <div className="relative mb-8 text-[#facc15] transition-transform duration-500 group-hover:-translate-y-2">
                <div className="absolute -inset-6 bg-[#fde047]/10 rounded-full blur-xl opacity-50"></div>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed text-center px-4">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;