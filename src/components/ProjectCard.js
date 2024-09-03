import React from 'react';
import { useSelector } from 'react-redux';
import translations from '../features/translations';


function ProjectCard({ title, overview, details, technologies, github, rank }) {
  
  const language = useSelector((state) => state.language.language)
  const t = translations[language]

  return (
    <div className="relative bg-gradient-third p-6 rounded-lg shadow-lg w-full max-w-6xl mb-8">
      {/* Badge for Rank */}
      {rank && (
        <div className="absolute bottom-4 right-4 bg-third text-white px-3 py-1 text-sm font-semibold rounded-md">
          {rank}
        </div>
      )}

      {/* Project Title */}
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      {/* Project Overview */}
      <p className="text-gray-700 mb-4">{overview}</p>

      {/* Project Details */}
      <ul className="list-disc pl-5 text-gray-700 mb-4">
        {details.map((detail, index) => (
          <li key={index} className="mb-2">
            <strong>{detail.title}:</strong> {detail.description}
          </li>
        ))}
      </ul>

      {/* Technologies Used */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800">{t.keyTechnologies}</h4>
        <p className="text-gray-700">{technologies.join(', ')}</p>
      </div>

      {/* GitHub Link */}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {t.viewOnGithub}
        </a>
      )}
    </div>
  );
}

export default ProjectCard;