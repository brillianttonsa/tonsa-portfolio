const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#fde047] flex items-center justify-center font-bold text-slate-900 rounded-lg">
            A
          </div>
          <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase">
            Dev<span className="text-[#facc15]">.</span>Lab
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
          <a href="#about" className="hover:text-[#facc15] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#facc15] transition-colors">Projects</a>
          <a href="#faq" className="hover:text-[#facc15] transition-colors">FAQ</a>
          <a href="#contact" className="bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-[#facc15] hover:text-slate-900 transition-all">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;