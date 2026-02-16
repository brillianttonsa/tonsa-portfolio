const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: "Let's Talk", isCta: true },
];

const NavLinks = ({ variant = 'desktop', onNavClick }) => {
  const baseClass = variant === 'mobile'
    ? 'block text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-[#facc15] transition-colors py-2'
    : 'hover:text-[#facc15] transition-colors';
  const ctaClass = variant === 'mobile'
    ? 'block bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-[#facc15] hover:text-slate-900 transition-all text-center text-sm font-bold uppercase tracking-widest mb-4'
    : 'bg-slate-900 text-white px-5 py-3 rounded-full hover:bg-[#facc15] hover:text-slate-900 transition-all';

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={item.isCta ? ctaClass : baseClass}
          onClick={onNavClick}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
