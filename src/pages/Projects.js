import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useSelector } from 'react-redux';
import translations from '../features/translations';


function Projects() {

  const language = useSelector((state) => state.language.language)
  const t = translations[language]

  const projectList = [
    {
      title:t.project.title,
      overview:t.project.overview,
      details:t.project.details,
      technologies: t.project.technologies,
      github: t.project.github,
      rank: t.project.rank
    },
    {
      title:t.project2.title,
      overview:t.project2.overview,
      details:t.project2.details,
      technologies: t.project2.technologies,
      github: t.project2.github,
      rank: t.project2.rank
    }
  ]

  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 gap-6 max-w-6xl justify-items-center">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            overview={project.overview}
            details={project.details}
            technologies={project.technologies}
            github={project.github}
            rank={project.rank}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;