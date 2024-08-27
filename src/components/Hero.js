// import React from 'react';
// import vedatImage from '../assets/images/IMG-20231114-WA0018.png';
// import CircleHoverButton from './buttons/CircleHoverButton';
// import GithubIconComponent from './icons/GithubIconComponent';
// import InstagramIconComponent from './icons/InstagramIconComponent';
// import LinkedinIconComponent from './icons/LinkedinIconComponent';

// function Hero() {
//   return (
//     <div className='grid flex flex-cols-1 md:grid-cols-9 flex justify-center'>
//     <div className='grid grid-cols-1 md:grid-cols-10 flex flex-col col-span-6 justify-center gap-10 m-4 min-h-[200px] rounded-xl shadow-md bg-secondary bg-opacity-85'>
//         <div className='flex flex-col-2 space-x-5 col-span-4 grid-cols-2 '>
//             <img className='max-h-[380px] justify-center' src={vedatImage} alt="Vedat Yalçınkaya" />
//             <div className='grid grid-cols-1 m-2 justify-center'>
//                 <h2 className='text-3xl text-primary-700 font-josefin justify-center'>I'm Software Developer</h2>
//                 <h2 className='text-5xl text-primary-700 font-josefin justify-center'>VEDAT YALÇINKAYA</h2>
//                 <p className='text-primary font-josefin'>Eager Software Developer with a focus on Java and React. 
//                     Passionate about innovative tech and problem-solving.
//                     Experienced in collaborative projects and
//                     keen on continuous learning.</p>
//                 <div className='grid grid-cols-2 m-4 gap-4 justify-center'>
//                     <CircleHoverButton text={"GET CV"}/>
//                     <CircleHoverButton text={"HIRE ME"}/>
//                 </div>
//             </div>
            
//         </div>
//         <div grid grid-cols-1 className='grid col-span-4 grid-cols-1 h-full justify-center'>  
//             <div className='flex flex-col justify-center h-full'>
//                 <h4 className='flex text-3xl text-primary-700 font-josefin justify-center'>Let's keep in touch</h4>
//                 <h5 className='flex text-2xl text-primary-700 font-josefin justify-center mt-4 mb-10'>Find me on any of these platforms</h5>
//                 <div className='flex space-x-5 justify-center'>
//                     <GithubIconComponent/>
//                     <InstagramIconComponent/>
//                     <LinkedinIconComponent/>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
    
//   );
// }

// export default Hero;

import React from 'react';
import vedatImage from '../assets/images/IMG-20231114-WA0018.png';
import CircleHoverButton from './buttons/CircleHoverButton';
import GithubIconComponent from './icons/GithubIconComponent';
import InstagramIconComponent from './icons/InstagramIconComponent';
import LinkedinIconComponent from './icons/LinkedinIconComponent';

function Hero() {
  return (
    <div className="flex justify-center mt-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-4 p-6 rounded-3xl shadow-md bg-secondary bg-opacity-85 max-w-6xl">
        
        {/* Sol Bölüm */}
        <div className="flex flex-col md:flex-row items-center space-x-5">
          <img className="max-h-[380px] rounded-lg" src={vedatImage} alt="Vedat Yalçınkaya" />
          <div className="text-center md:text-left mt-4 md:mt-0">
            <h2 className="text-3xl text-primary-700 font-josefin">I'm Software Developer</h2>
            <h2 className="text-5xl text-third font-josefin font-bold mt-2">VEDAT YALÇINKAYA</h2>
            <p className="text-primary font-josefin mt-4">
              Eager Software Developer with a focus on Java and React. Passionate about innovative tech and problem-solving. Experienced in collaborative projects and keen on continuous learning.
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <CircleHoverButton text={"GET CV"} />
              <CircleHoverButton text={"HIRE ME"} />
            </div>
          </div>
        </div>
        
        {/* Sağ Bölüm */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-3xl text-primary-700 font-josefin">Let's keep in touch</h4>
          <h5 className="text-2xl text-primary-700 font-josefin mt-4 mb-10">Find me on any of these platforms</h5>
          <div className="flex space-x-5">
            <GithubIconComponent />
            <InstagramIconComponent />
            <LinkedinIconComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
