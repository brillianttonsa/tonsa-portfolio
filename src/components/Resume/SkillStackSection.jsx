const SkillCategoryCard = ({ title, icon, skills }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-hover duration-300 hover:shadow-lg">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-[#fde047] rounded-lg">{icon}</div>
      <h4 className="text-xl font-bold">{title}</h4>
    </div>
    <div className="space-y-6">
      {skills.map((skill, sIdx) => (
        <div key={sIdx}>
          <div className="flex justify-between mb-2">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-600">{skill.name}</span>
            <span className="font-bold text-xs text-slate-400">{skill.percentage}%</span>
          </div>
          <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-900 transition-all duration-1000 ease-out"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillStackSection = ({ categories }) => (
  <div className="mb-20">
    <h3 className="text-2xl font-bold mb-12 text-center">Technical Stack</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {categories.map((cat, idx) => (
        <SkillCategoryCard key={idx} title={cat.title} icon={cat.icon} skills={cat.skills} />
      ))}
    </div>
  </div>
);

export default SkillStackSection;
