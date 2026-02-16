import { X, CheckCircle2, Cpu, Code2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-slate-100 p-2 rounded-full hover:bg-[#fde047] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} className="text-slate-900" />
        </button>
        <div className="w-full md:w-1/2 h-80 md:h-auto overflow-none">
          <img src={project.image} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <span className="text-[#facc15] text-[10px] font-black uppercase tracking-widest">{project.category}</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-6 uppercase tracking-tighter">{project.title}</h2>
          <p className="text-slate-600 leading-relaxed mb-8">{project.desc}</p>
          {project.features?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <Cpu size={14} className="text-[#facc15]" /> Key Features
              </h4>
              <div className="space-y-3">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-[#fde047]" /> {f}
                  </div>
                ))}
              </div>
            </div>
          )}
          {project.tech?.length > 0 && (
            <div className="mb-10">
              <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <Code2 size={14} className="text-[#facc15]" /> Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-4 pt-6 border-t border-slate-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 text-center py-4 rounded-xl font-black text-xs uppercase transition-all ${
                project.status === "Live"
                  ? "bg-[#fde047] text-slate-900 hover:bg-slate-900 hover:text-white"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"
              }`}
            >
              {project.status === "Live" ? "View Project Live" : "System in Build"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
