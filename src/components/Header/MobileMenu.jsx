import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';

export const MobileMenuButton = ({ isOpen, onToggle }) => (
  <button
    type="button"
    className="md:hidden p-2 text-slate-900 hover:text-[#facc15] transition-colors"
    onClick={onToggle}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export const MobileMenuDropdown = ({ isOpen, onNavClick }) => (
  <div
    className={`md:hidden bg-white border-b border-slate-100 px-6 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <NavLinks variant="mobile" onNavClick={onNavClick} />
  </div>
);
