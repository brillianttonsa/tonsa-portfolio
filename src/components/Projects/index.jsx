import { useState, useEffect } from 'react';
import { projects, futureProjects } from '../features/ProjectFeatures';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FutureProjectsSection from './FutureProjectsSection';

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-white py-24 px-6 font-sans relative scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Engineering Portfolio"
          title={<>Latest <span className="text-[#facc15]">Engineering</span> Deployments</>}
          subtitle="From SaaS development to LLM engineering, these projects showcase my transition from Computer Science student to full-stack engineer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={setSelectedProject} />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

        <FutureProjectsSection projects={futureProjects} onSelectProject={setSelectedProject} />
      </div>
    </section>
  );
};

export default ProjectSection;
