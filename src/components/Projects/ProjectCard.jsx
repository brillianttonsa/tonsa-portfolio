const ProjectCard = ({ project, onClick }) => (
  <div
    className="group cursor-pointer"
    onClick={() => onClick(project)}
    onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
    role="button"
    tabIndex={0}
  >
    <div className="overflow-hidden rounded-xl mb-6 shadow-sm border border-slate-100 bg-slate-100 relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-700"
      />
      {project.status !== "Live" && (
        <div className="absolute top-3 left-3 bg-slate-900/90 text-[#fde047] text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#fde047] animate-pulse" />
          {project.status.toUpperCase()}
        </div>
      )}
    </div>
    <span className="text-[#facc15] text-[10px] font-black uppercase tracking-widest">{project.category}</span>
    <h3 className="font-black text-2xl text-slate-900 mt-1 mb-3 group-hover:text-[#facc15] transition-colors">{project.title}</h3>
    <p className="text-slate-500 text-sm line-clamp-2">Click to inspect technical details →</p>
  </div>
);

export default ProjectCard;
