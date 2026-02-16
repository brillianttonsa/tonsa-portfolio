import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

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
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
          <a href="#about" className="hover:text-[#facc15] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#facc15] transition-colors">Projects</a>
          <a href="#faq" className="hover:text-[#facc15] transition-colors">FAQ</a>
          <a href="#contact" className="bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-[#facc15] hover:text-slate-900 transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-900 hover:text-[#facc15] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-b border-slate-100 px-6 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <a 
          href="#about" 
          className="block text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#facc15] transition-colors py-2"
          onClick={handleNavClick}
        >
          About
        </a>
        <a 
          href="#projects" 
          className="block text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#facc15] transition-colors py-2"
          onClick={handleNavClick}
        >
          Projects
        </a>
        <a 
          href="#faq" 
          className="block text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#facc15] transition-colors py-2"
          onClick={handleNavClick}
        >
          FAQ
        </a>
        <a 
          href="#contact" 
          className="block bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-[#facc15] hover:text-slate-900 transition-all text-center text-sm font-bold uppercase tracking-widest mb-4"
          onClick={handleNavClick}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Header;