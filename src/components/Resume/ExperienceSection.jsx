const TimelineItem = ({ role, company, years, desc }) => (
  <div className="relative">
    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#fde047] border-4 border-white shadow-sm" />
    <h4 className="text-xl font-bold">{role}</h4>
    <p className="text-[#facc15] text-sm font-bold mb-2">{company} / {years}</p>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ExperienceSection = ({ experiences }) => (
  <div>
    <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#fde047] inline-block">Key Projects</h3>
    <div className="space-y-8 border-l-2 border-slate-100 pl-6 mt-4">
      {experiences.map((item, idx) => (
        <TimelineItem
          key={idx}
          role={item.role}
          company={item.company}
          years={item.years}
          desc={item.desc}
        />
      ))}
    </div>
  </div>
);

export default ExperienceSection;
