import { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { MobileMenuButton, MobileMenuDropdown } from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
          <NavLinks onNavClick={() => {}} />
        </div>
        <MobileMenuButton isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <MobileMenuDropdown isOpen={isMenuOpen} onNavClick={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Header;
