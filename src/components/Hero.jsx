import { useState, useEffect, useMemo } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Memoizing roles to prevent unnecessary re-renders
  const roles = useMemo(() => [
    "AI Systems Engineer",
    "Full Stack Developer",
    "Mobile App Developer",
    "LLM Specialist",
    "SaaS Builder",
    "problem Solver"
  ], []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="bg-slate-900 py-32 px-6 flex flex-col items-center justify-center text-center font-sans overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#fde047] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#fde047] rounded-full blur-[120px]"></div>
      </div>

      {/* Profile Image with Yellow Border */}
      <div className="relative mb-12">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-slate-800 shadow-[0_0_50px_rgba(252,224,71,0.2)] relative z-10">
          <img 
            src="/profile.jpg" 
            alt="Developer Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        {/* Animated Ring */}
        <div className="absolute -inset-4 border-2 border-dashed border-[#fde047]/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
      </div>

      {/* Intro Text */}
      <div className="relative z-10 space-y-6">
        <h2 className="text-[#fde047] text-xs md:text-sm font-black uppercase tracking-[0.5em]">
          Computer Science Finalist, AI & SW Engineer
        </h2>
        
        <div className="min-h-[160px] md:min-h-[220px] flex flex-col justify-start">
          <h1 className="text-white text-5xl md:text-8xl font-black leading-tight tracking-tighter">
            I am a <br />
            <span className="text-[#fde047] relative">
              {text}
              <span className="inline-block w-2 md:w-3 h-10 md:h-16 bg-white ml-2 animate-pulse align-middle"></span>
            </span>
          </h1>
        </div>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Building <span className="text-white underline decoration-[#fde047] decoration-4 underline-offset-4">intelligent SaaS solutions</span> and high-performance mobile apps with Python, React, and Node.js.
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-16 flex flex-col items-center gap-2">
        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Explore My Labs</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#fde047] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;