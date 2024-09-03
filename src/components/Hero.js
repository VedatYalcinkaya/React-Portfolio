import React from 'react';
import vedatImage from '../assets/images/IMG-20231114-WA0018.png';
import CircleHoverButton from './buttons/CircleHoverButton';
import GithubIconComponent from './icons/GithubIconComponent';
import InstagramIconComponent from './icons/InstagramIconComponent';
import LinkedinIconComponent from './icons/LinkedinIconComponent';
import { useSelector } from 'react-redux';
import translations from '../features/translations';

function Hero() {
  const language = useSelector((state) => state.language.language); // Redux'tan seçili dili al
  const t = translations[language]; // Seçili dile göre çevirileri al

  return (
    <div className="flex justify-center mt-10 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 m-4 p-6 rounded-3xl shadow-md bg-gradient-primaryLeft bg-opacity-85 max-w-6xl">

        {/* Üst Başlık */}
        <div className='col-span-full text-center'>
          <h2 className='text-3xl md:text-5xl text-third font-josefin mb-6'>{t.welcome}</h2>
        </div>

        {/* Sol Bölüm */}
        <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-5">
          <img className="max-h-[300px] lg:max-h-[380px] rounded-lg mb-4 lg:mb-0" src={vedatImage} alt="Vedat Yalçınkaya" />
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl text-primary-700 font-josefin">{t.softwareDeveloper}</h2>
            <h2 className="text-4xl md:text-5xl text-third font-josefin font-bold mt-2">VEDAT YALÇINKAYA</h2>
            <p className="text-primary font-josefin mt-4">
              {t.developerIntro}
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6 justify-center lg:justify-start">
              <CircleHoverButton text={t.getCV} />
              <CircleHoverButton text={t.hireMe} />
            </div>
          </div>
        </div>

        {/* Sağ Bölüm */}
        <div className="flex flex-col justify-center items-center mt-10 lg:mt-0">
          <h4 className="text-2xl md:text-3xl text-primary-700 font-josefin">{t.keepInTouch}</h4>
          <h5 className="text-xl md:text-2xl text-primary-700 font-josefin justify-center mt-4 mb-10">{t.findMeOnPlatforms}</h5>
          <div className="flex space-x-5">
            <a href="https://github.com/VedatYalcinkaya" target='_blank' rel="noopener noreferrer">
              <GithubIconComponent />
            </a>
            <a href="https://www.instagram.com/vedat_ylcnky/" target='_blank' rel="noopener noreferrer">
              <InstagramIconComponent />
            </a>
            <a href="https://www.linkedin.com/in/vedat-yalcinkaya" target='_blank' rel="noopener noreferrer">
              <LinkedinIconComponent />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
