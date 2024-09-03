import React from 'react';
import vedatImage from '../assets/images/vedatCyborg.png';
import translations from "../features/translations";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function About() {
  const language = useSelector((state) => state.language.language);
  const t = translations[language];
  return (
    <div className="flex justify-center mt-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4 p-6 rounded-3xl shadow-md bg-gradient-primaryLeft bg-opacity-85 max-w-6xl">
        
        {/* Sol Bölüm - Profil Resmi */}
        <div className="flex justify-center md:justify-center items-center">
          <img className="max-h-[380px] rounded-lg" src={vedatImage} alt="Vedat Yalçınkaya" />
        </div>
        
        {/* Sağ Bölüm - Tanıtım Yazısı */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl text-primary-700 font-josefin font-bold mb-4">{t.aboutMe}</h2>
          <p className="text-lg text-primary font-josefin mb-6">{t.aboutMeParagraph}</p>
          <p className="text-lg text-primary font-josefin mb-6">{t.aboutMeParagraph1}</p>
          <p className="text-lg text-primary font-josefin mb-6">{t.aboutMeParagraph2}</p>
          <div className="flex space-x-4 mt-4">
            <Link to="/projects" className="text-xl text-third font-josefin hover:text-primary transition duration-300">{t.myProjects} </Link>
            <Link to="/contact" className="text-xl text-third font-josefin hover:text-primary transition duration-300">{t.contactMe} </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
