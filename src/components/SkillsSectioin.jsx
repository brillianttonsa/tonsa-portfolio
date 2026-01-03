import { Layout, Smartphone, BrainCircuit, Database, LineChart, Cpu } from 'lucide-react';

const SkillsSection = () => {
  const services = [
    {
      title: "AI & LLM Engineering",
      icon: <BrainCircuit size={42} />,
      desc: "Architecting RAG systems and LLM pipelines. I turn raw data into intelligent responses using Python and modern AI orchestration."
    },
    {
      title: "Full-Stack SaaS",
      icon: <Database size={42} />,
      desc: "Building scalable platforms like my Maize Inventory System. Expertise in Supabase, SQL, React, Node.js, and complex database schemas."
    },
    {
      title: "Mobile App Dev",
      icon: <Smartphone size={42} />,
      desc: "Cross-platform development with React Native and Expo. Focused on high-performance UIs and seamless mobile-AI integration."
    },
    {
      title: "Predictive Analytics",
      icon: <LineChart size={42} />,
      desc: "Using Scikit-learn to forecast market trends and stock demand, a core feature I'm implementing in my agro-business solutions."
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={42} />,
      desc: "Building production-ready interfaces with Next.js, React, Tailwindcss and TypeScript, following the professional standards from my Dr. Angela Yu training."
    },
    {
      title: "System Architecture",
      icon: <Cpu size={42} />,
      desc: "As a CS Finalist, I prioritize clean code and scalable architecture—ensuring role-based access and secure API data flow."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        <span className="bg-[#fde047] text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em]">
          Technical Expertise
        </span>
        
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-8 mb-8">
          Full-Stack Logic Meets <span className="text-[#facc15]">AI Intelligence</span>
        </h2>

        <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mb-24">
          I bridge the gap between traditional software engineering and the new era of 
          Artificial Intelligence, building systems that are autonomous, scalable, and data-driven.
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