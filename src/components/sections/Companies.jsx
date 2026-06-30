import React from 'react';
import { 
  siGoogle, 
  siGithub, 
  siNetflix, 
  siApple, 
  siUber, 
  siAtlassian, 
  siFigma,
  siSpotify,
  siIntel,
  siAirbnb
} from 'simple-icons';

const companies = [
  siGoogle,
  siGithub,
  siNetflix,
  siApple,
  siUber,
  siAtlassian,
  siFigma,
  siSpotify,
  siIntel,
  siAirbnb
];

const CompanyLogo = ({ icon }) => {
  const isDarkInvert = icon.title === 'Apple' || icon.title === 'Uber';
  return (
    <div className="flex items-center justify-center mx-10 opacity-75 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-10 w-10 ${isDarkInvert ? 'dark:invert' : ''}`}
        fill={`#${icon.hex}`}
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    </div>
  );
};

export function Companies() {
  return (
    <section className="py-12 border-y border-card-border bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold tracking-wide text-foreground/50 uppercase">
          Our students work at top tech companies
        </p>
      </div>
      
      {/* Infinite scrolling marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center py-4">
          {companies.map((company, index) => (
            <CompanyLogo key={index} icon={company} />
          ))}
          {/* Duplicate for seamless looping */}
          {companies.map((company, index) => (
            <CompanyLogo key={`dup-${index}`} icon={company} />
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
          {companies.map((company, index) => (
            <CompanyLogo key={`dup2-${index}`} icon={company} />
          ))}
          {companies.map((company, index) => (
            <CompanyLogo key={`dup3-${index}`} icon={company} />
          ))}
        </div>
        
        {/* Gradient fades for the edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-card to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-card to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
