const DetailItem = ({ label, value, isLink }) => (
  <div>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">{label}</p>
    <p className={`text-lg font-black text-slate-800 ${isLink ? 'underline decoration-[#fde047] decoration-4 cursor-pointer hover:text-slate-600 transition-colors' : ''}`}>
      {value}
    </p>
  </div>
);

const AboutDetailsGrid = ({ details }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-4 border-t-2 border-slate-50 pt-10">
    {details.map((item, index) => (
      <DetailItem key={index} label={item.label} value={item.value} isLink={item.isLink} />
    ))}
  </div>
);

export default AboutDetailsGrid;
