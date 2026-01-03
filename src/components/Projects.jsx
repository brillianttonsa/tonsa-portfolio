import React, { useState,useEffect } from 'react';
import { projects, futureProjects } from './features/ProjectFeatures';
import {  X, CheckCircle2, Cpu, Code2 } from 'lucide-react';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
  if (selectedProject) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedProject]);

 
  return (
    <section className="bg-white py-24 px-6 font-sans relative">

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="bg-[#fde047] text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-sm uppercase tracking-[0.3em]">
            Engineering Portfolio
          </span>
          {/* Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-6">
            Latest <span className="text-[#facc15]">Engineering</span> Deployments
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            From SaaS development to LLM engineering, these projects showcase my 
            transition from Computer Science student to full-stack engineer.
          </p>
        </div>
          
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="overflow-hidden rounded-xl mb-6 shadow-sm border border-slate-100 bg-slate-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-700"
                />
                {project.status !== "Live" && (
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-[#fde047] text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fde047] animate-pulse"></div>
                    {project.status.toUpperCase()}
                  </div>
                )}
              </div>

              <span className="text-[#facc15] text-[10px] font-black uppercase tracking-widest">{project.category}</span>
              <h3 className="font-black text-2xl text-slate-900 mt-1 mb-3 group-hover:text-[#facc15] transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">Click to inspect technical details →</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- PROJECT MODAL OVERLAY --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Card */}
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 bg-slate-100 p-2 rounded-full hover:bg-[#fde047] hover:cursor-pointer transition-colors"
            >
              <X size={20} className="text-slate-900" />
            </button>

            {/* Modal Image Area */}
            <div className="w-full md:w-1/2 h-80 md:h-auto overflow-none">
              <img src={selectedProject.image} className="w-full h-full object-cover" alt="Detail" />
            </div>

            {/* Modal Content Area */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[90vh]">

              <span className="text-[#facc15] text-[10px] font-black uppercase tracking-widest">{selectedProject.category}</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-6 uppercase tracking-tighter">{selectedProject.title}</h2>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                {selectedProject.desc}
              </p>

              {/* Feature List */}
              <div className="mb-8">
                <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cpu size={14} className="text-[#facc15]" /> Key Features
                </h4>
                <div className="space-y-3">
                  {selectedProject.features?.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-[#fde047]" /> {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-10">
                <h4 className="text-slate-900 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Code2 size={14} className="text-[#facc15]" /> Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech?.map((t, i) => (
                    <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6 border-t border-slate-100">
                <a 
                  href={selectedProject.link}
                  className={`flex-1 text-center py-4 rounded-xl font-black text-xs uppercase transition-all ${
                    selectedProject.status === "Live" 
                    ? "bg-[#fde047] text-slate-900 hover:bg-slate-900 hover:text-white" 
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {selectedProject.status === "Live" ? "View Project Live" : "System in Build"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FUTURE PROJECTS / ROADMAP SECTION --- */}
        <div className="mt-32">
          <div className="flex justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <span className="text-[#facc15] text-[10px] font-black uppercase tracking-[0.3em]">Next Horizon</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4">Future <span className="italic">Roadmap</span></h2>
              
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl hidden  md:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase italic">"Building systems that bridge the trust gap."</p>
              </div>
            </div>

        {/* Project Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
                {futureProjects.map((project, index) => (
                    <div 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                    >
                    <div className="overflow-hidden rounded-xl mb-6 shadow-sm border border-slate-100 bg-slate-100 relative">
                        <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-700"
                        />
                        {project.status !== "Live" && (
                        <div className="absolute top-3 left-3 bg-slate-900/90 text-[#fde047] text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#fde047] animate-pulse"></div>
                            {project.status.toUpperCase()}
                        </div>
                        )}
                    </div>

                    <span className="text-[#facc15] text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                    <h3 className="font-black text-2xl text-slate-900 mt-1 mb-3 group-hover:text-[#facc15] transition-colors">{project.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2">Click to inspect technical details →</p>
                    </div>
                ))}
                </div>
        </div>
    </section>
  );
};

export default ProjectSection;