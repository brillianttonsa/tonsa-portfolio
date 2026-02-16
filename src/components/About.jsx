
const About = () => {
  const details = [
    { label: "Name:", value: "Abdullatif Mnyamisi" },
    { label: "Email:", value: "abdullatifmyamis@gmail.com", isLink: true },
    { label: "Role:", value: "Frontend & Backend Engineer — Aspiring AI Engineer" },
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

        <div className="items-start">
          
          {/* Bio Column */}
          <div className="">
            <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                The <span className="bg-[#fde047] px-2">Hybrid</span> Developer
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I build fast, component-driven web apps with React—clean, reusable UI and
                pragmatic frontend architecture.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I also craft Node.js/Express backends and APIs, giving me a full-stack view that
                keeps frontend and server aligned.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                I build good maintainable code with testing, CI/CD pipelines, and Tailwind for
                polished user experiences.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Currently exploring AI integrations to create smarter, more automated user
                experiences.
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

        </div>
      </div>
    </section>
  );
};

export default About;