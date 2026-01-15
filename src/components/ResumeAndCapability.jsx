import { Download, Cpu, Globe, Smartphone } from 'lucide-react';

const ResumeAndCapability = () => {
  const education = [
    { 
      degree: "BSc in Computer Science", 
      school: "Finalist Student UDSM", 
      years: "2023 - 2026",
      desc: "Specializing in Software Architecture and Artificial Intelligence."
    },
    { 
      degree: "Full Stack Web Development Bootcamp", 
      school: "Udemy (Dr. Angela Yu Certification)", 
      years: "2024 - 2025",
      desc: "Professional certification covering the Full stack, SQL, and modern web deployment."
    },
    { 
      degree: "Python Engineering & Automation", 
      school: "Advanced Certification", 
      years: "2023 - 2026",
      desc: "Focused on Python programming, data structures, automation scripts, and foundational AI/ML."
    }
  ];

  const projectsAsExperience = [
    { 
      role: "Lead Full-Stack Developer", 
      company: "Maize Inventory SaaS System", 
      years: "2025 - Current",
      desc: "Designing an AI-enabled platform for agro-businesses to track stock, production (flour/feed), and sales. Integrating AI for demand forecasting."
    },
    { 
      role: "AI & LLM Researcher", 
      company: "Specialized Engineering Labs", 
      years: "2025 - Current",
      desc: "Building RAG-based systems and 2+ AI experimental projects focusing on intelligent data retrieval and task automation."
    },
    { 
      role: "Software Engineer", 
      company: "Productivity & Mobile Suite", 
      years: "2025",
      desc: "Developed a Task Management System and To-Do app using React/Node.js. Architected 2+ mobile application mockups for real-world utility."
    },
  ];

  const skillCategories = [
    {
      title: "AI & LLM Engineering",
      icon: <Cpu size={20} className="text-slate-900" />,
      skills: [
        { name: "RAG Architecture / Prompting", percentage: 50 },
        { name: "Python / Scikit-learn", percentage: 92 },
        { name: "Vector DBs & LLM Integration", percentage: 20 }
      ]
    },
    {
      title: "Full-Stack Web",
      icon: <Globe size={20} className="text-slate-900" />,
      skills: [
        { name: "React / Next.js / Tailwind", percentage: 95 },
        { name: "Node.js / Express / SQL", percentage: 90 },
        { name: "Supabase / REST APIs", percentage: 85 }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={20} className="text-slate-900" />,
      skills: [
        { name: "React Native / Expo", percentage: 80 },
        { name: "Mobile UI / UX", percentage: 60 },
        { name: "App Prototyping", percentage: 80 }
      ]
    }
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#fde047] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Capability Summary</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-32">
          
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#fde047] inline-block">Education</h3>
            <div className="space-y-8 border-l-2 border-slate-100 pl-6 mt-4">
              {education.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#fde047] border-4 border-white shadow-sm" />
                  <h4 className="text-xl font-bold">{item.degree}</h4>
                  <p className="text-[#facc15] text-sm font-bold mb-1">{item.school} / {item.years}</p>
                  <p className="text-slate-500 text-xs leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project-Based Experience Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#fde047] inline-block">Key Projects</h3>
            <div className="space-y-8 border-l-2 border-slate-100 pl-6 mt-4">
              {projectsAsExperience.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#fde047] border-4 border-white shadow-sm" />
                  <h4 className="text-xl font-bold">{item.role}</h4>
                  <p className="text-[#facc15] text-sm font-bold mb-2">{item.company} / {item.years}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-12 text-center">Technical Stack</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-hover duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-[#fde047] rounded-lg">
                    {cat.icon}
                  </div>
                  <h4 className="text-xl font-bold">{cat.title}</h4>
                </div>
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-xs uppercase tracking-wider text-slate-600">{skill.name}</span>
                        <span className="font-bold text-xs text-slate-400">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-900 transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href="/cv/Abdullatif-Mnyamisi-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 border-2 border-slate-900 px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white hover:cursor-pointer transition-all rounded-sm shadow-[4px_4px_0px_0px_rgba(252,211,77,1)]"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default ResumeAndCapability;