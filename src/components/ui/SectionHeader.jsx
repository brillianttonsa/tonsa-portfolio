const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="text-center mb-16">
    {badge && (
      <span className="bg-[#fde047] text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em]">
        {badge}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 tracking-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mt-4">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
