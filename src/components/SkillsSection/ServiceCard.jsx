const ServiceCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center group">
    <div className="relative mb-8 text-[#facc15] transition-transform duration-500 group-hover:-translate-y-2">
      <div className="absolute -inset-6 bg-[#fde047]/10 rounded-full blur-xl opacity-50" />
      {icon}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
      {title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed text-center px-4">
      {desc}
    </p>
  </div>
);

export default ServiceCard;
