import ProjectCard from './ProjectCard';

const FutureProjectsSection = ({ projects, onSelectProject }) => (
  <div className="mt-32">
    <div className="flex justify-between items-end mb-12 gap-6">
      <div className="max-w-xl">
        <span className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.3em]">Next Horizon</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4">Future <span className="italic">Roadmap</span></h2>
      </div>
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hidden md:block">
        <p className="text-[10px] font-bold text-slate-400 uppercase italic">&quot;Building systems that bridge the trust gap.&quot;</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} onClick={onSelectProject} />
      ))}
    </div>
  </div>
);

export default FutureProjectsSection;
