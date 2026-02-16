const TimelineItem = ({ degree, school, years, desc }) => (
  <div className="relative">
    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#fde047] border-4 border-white shadow-sm" />
    <h4 className="text-xl font-bold">{degree}</h4>
    <p className="text-[#facc15] text-sm font-bold mb-1">{school} / {years}</p>
    <p className="text-slate-500 text-xs leading-relaxed italic">{desc}</p>
  </div>
);

const EducationSection = ({ education }) => (
  <div>
    <h3 className="text-2xl font-bold mb-8 border-b-2 border-[#fde047] inline-block">Education</h3>
    <div className="space-y-8 border-l-2 border-slate-100 pl-6 mt-4">
      {education.map((item, idx) => (
        <TimelineItem
          key={idx}
          degree={item.degree}
          school={item.school}
          years={item.years}
          desc={item.desc}
        />
      ))}
    </div>
  </div>
);

export default EducationSection;
