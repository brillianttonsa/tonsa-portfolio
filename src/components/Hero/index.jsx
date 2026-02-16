import ProfileImage from './ProfileImage';
import TypingHero from './TypingHero';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => (
  <section className="bg-slate-900 py-32 px-6 flex flex-col items-center justify-center text-center font-sans overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#fde047] rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#fde047] rounded-full blur-[120px]" />
    </div>

    <div className="relative z-10">
      <ProfileImage />
    </div>

    <div className="relative z-10 space-y-6">
      <h2 className="text-[#fde047] text-xs md:text-sm font-black uppercase tracking-[0.5em]">
        Frontend & Backend Engineer | Aspiring AI Engineer
      </h2>
      <TypingHero />
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
        Crafting <span className="text-white underline decoration-[#fde047] decoration-4 underline-offset-4">clean, maintainable code</span> and scalable web solutions with React, Node.js, and modern tooling.
      </p>
    </div>

    <ScrollIndicator />
  </section>
);

export default Hero;
