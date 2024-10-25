import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 bg-gradient-to-br from-[#1E1E2E] to-[#2A2A3A]  overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Fingerprint background */}
          <div 
            className="absolute invert translate-x-80 rotate-[-134deg] sm:rotate-[-134deg] scale-[2] sm:scale-[0.8] bg-contain bg-no-repeat bg-center opacity-100 z-0 pointer-events-none"
          >
          <img src="/src/assets/images/Background.png"/></div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img 
            src="/src/assets/images/AboutImage.png" 
            alt="SPUFO in action" 
            className="rounded-3xl shadow-2xl w-2/3 h-auto transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-7xl font-bold text-white mb-6">About SPUFO</h2>
          <p className="text-white text-lg mb-6">
            The <span className="text-[#FF6600] hover:scale-[1.05] transition-all duration-300 inline-block mx-1">SPUFO</span> app is a forensic iOS solution that simplifies and streamlines the collection of dactyloscopic traces at crime scenes.
          </p>
          <ul className="text-white text-lg space-y-4">
            <li className="flex items-start">
              <span className="text-[#FF6600] mr-2">•</span>
              Replaces traditional DSLR cameras and gelatin films with mobile technology.
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6600] mr-2">•</span>
              Captures traces on-site, scaled 1:1, and saved in 1000 dpi resolution.
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6600] mr-2">•</span>
              Allows direct numbering, cropping, and preparation for AFIS searches.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
