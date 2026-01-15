
const About = () => {
  const details = [
    { label: "Name:", value: "Abdullatif Mnyamisi" },
    { label: "Email:", value: "abdullatifmyamis@gmail.com", isLink: true },
    { label: "Role:", value: "AI Engineer & Full-Stack Developer" },
    { label: "Status:", value: "Finalist CS Student" },
  ];

  return (
    <section id="about" className="bg-white py-14 px-6 font-sans scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="bg-[#fde047] text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em]">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 tracking-tight">
            Bridging Logic and Intelligence
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              The <span className="bg-[#fde047] px-2">Hybrid</span> Developer
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I am a **Computer Science Finalist** with a deep passion for building software that thinks. 
              While my foundation is academic, my execution is practical—honed through rigorous 
              training in **Full-Stack Web Development** and **LLM Engineering**.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Currently, I am architecting an **AI-enabled Maize Inventory System**, a SaaS platform 
              designed to solve real-world agricultural waste through predictive analytics. I don't 
              just build apps; I build systems that automate complexity and provide actionable insights.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-4 border-t-2 border-slate-50 pt-10">
              {details.map((item, index) => (
                <div key={index}>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                  <p className={`text-lg font-black text-slate-800 ${item.isLink ? 'underline decoration-[#fde047] decoration-4 cursor-pointer hover:text-slate-600 transition-colors' : ''}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Column - Showing your actual project count */}
          <div className="bg-slate-50 rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden border border-slate-100">
             {/* Subtle Decorative Icon */}
            <div className="relative z-10">
              <span className="text-[120px] font-black text-slate-900 leading-none tracking-tighter">
                04
              </span>
              <span className="text-[#fde047] text-6xl font-black absolute -top-4 -right-8">+</span>
            </div>
            
            <p className="text-xl font-black text-slate-800 mt-4 uppercase tracking-tighter leading-none">
              Production-Ready <br /> <span className="text-slate-400">Applications</span>
            </p>
            
            <div className="w-12 h-1 bg-[#fde047] my-6"></div>
            
            <p className="text-slate-500 text-sm font-medium italic">
              "From Task Management to <br /> AI Agro-SaaS."
            </p>

            {/* Background Shape */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#fde047]/20 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;