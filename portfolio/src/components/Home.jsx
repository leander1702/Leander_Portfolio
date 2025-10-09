import React from 'react';
import ShinyText from './AnimationEffects/ShinyText';
import LightRays from './AnimationEffects/LightRays';
import ProfileCard from '../components/Asstes/ProfileCard1.svg';
import pdf from '../components/Asstes/resume/Leander_Xavier_Resume.pdf'
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb
} from 'react-icons/bi';

const Home = () => {
  const leftSideIcons = [
    {
      name: 'HTML5',
      icon: BiLogoHtml5,
      color: 'text-orange-500',
      size: 'text-2xl md:text-3xl',
      position: 'top-20 left-8 md:top-42 md:left-16',
      animationDelay: 'delay-0',
      waveDelay: '0s'
    },
    {
      name: 'CSS3',
      icon: BiLogoCss3,
      color: 'text-blue-600',
      size: 'text-2xl md:text-4xl',
      position: 'top-52 left-2 md:top-52 md:left-6',
      animationDelay: 'delay-300',
      waveDelay: '0.3s'
    },
    {
      name: 'JavaScript',
      icon: BiLogoJavascript,
      color: 'text-yellow-400',
      size: 'text-2xl md:text-3xl',
      position: 'bottom-24 left-6 md:top-96 md:left-20',
      animationDelay: 'delay-600',
      waveDelay: '0.6s'
    }
  ];

  const rightSideIcons = [
    {
      name: 'React js',
      icon: BiLogoReact,
      color: 'text-blue-500',
      size: 'text-2xl md:text-3xl',
      position: 'top-20 right-8 md:top-2 md:right-16',
      animationDelay: 'delay-900',
      waveDelay: '0.9s'
    },
    {
      name: 'Node.js',
      icon: BiLogoNodejs,
      color: 'text-green-500',
      size: 'text-2xl md:text-3xl',
      position: 'top-72 right-2 md:top-44 md:right-6',
      animationDelay: 'delay-1200',
      waveDelay: '1.2s'
    },
    {
      name: 'MongoDB',
      icon: BiLogoMongodb,
      color: 'text-green-600',
      size: 'text-2xl md:text-3xl',
      position: 'bottom-5 right-6 md:top-80 md:right-24',
      animationDelay: 'delay-1500',
      waveDelay: '1.5s'
    }
  ];

  return (
    <section
      id="home"
      className="flex items-center justify-center px-4 py-16 relative overflow-hidden min-h-screen"
    >
      <div className="container mx-auto relative z-20">
        {/* ✅ Mobile: Column | Desktop: Row */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* ✨ Left Content (text) */}
          <div className="w-full md:w-1/2 md:mt-6 relative">

            <div className="relative z-10">
              <h3 className="text-2xl md:text-2xl md:mb-2 text-center font-light md:text-start text-gray-300 font-['Inter']">
                Hey, I'm
                <span className="md:text-4xl text-center md:text-start font-semibold font-sans text-white ml-2">
                  Leander Xavier A
                </span>
              </h3>
              <h1 className="text-4xl md:text-6xl text-center md:mb-6 md:text-start font-semibold leading-tight">
                <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text">
                  Front-End Developer
                </span>
              </h1>
              <p className="text-lg sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-6 leading-relaxed tracking-wide text-justify px-4 md:px-0">
                I build responsive web applications with modern technologies like React.js,
                JavaScript, and Tailwind CSS. Passionate about creating engaging user experiences
                and clean, maintainable code.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* Download Resume Button */}
                <a
                  href={pdf}
                  download="Leander_Xavier_Resume.pdf"
                  className="px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-all duration-300"
                >
                  Download Resume
                </a>
                {/* GitHub Button */}
                <a href="https://github.com/leander1702" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center border-none bg-transparent relative rounded-lg cursor-pointer transition-all duration-300 group">
                  <div className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-0 letter-spacing-2 rounded-lg transition-all duration-300 border border-gray-400/50 group-hover:bg-gray-400/50 group-hover:backdrop-blur-sm">
                    <svg fill="white" viewBox="0 0 496 512" className="w-5 h-5">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </div>
                  <div className="absolute w-full h-full bg-gray-900 -z-10 rounded-lg pointer-events-none transition-all duration-300 group-hover:rotate-12 group-hover:origin-bottom"></div>
                </a>

                {/* LinkedIn Button */}
                <a href="//www.linkedin.com/in/leanderxavier17" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center border-none bg-transparent relative rounded-lg cursor-pointer transition-all duration-300 group">
                  <div className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-0 letter-spacing-2 rounded-lg transition-all duration-300 border border-gray-400/50 group-hover:bg-gray-400/50 group-hover:backdrop-blur-sm">
                    <svg fill="white" viewBox="0 0 448 512" className="w-5 h-5">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </div>
                  <div className="absolute w-full h-full bg-gray-900 -z-10 rounded-lg pointer-events-none transition-all duration-300 group-hover:rotate-12 group-hover:origin-bottom"></div>
                </a>

                {/* mail Button */}
                <a href="mailto:leanderxavier71@gmail.com" className="w-11 h-11 flex items-center justify-center border-none bg-transparent relative rounded-lg cursor-pointer transition-all duration-300 group">
                  <div className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-0 letter-spacing-2 rounded-lg transition-all duration-300 border border-gray-400/50 group-hover:bg-gray-400/50 group-hover:backdrop-blur-sm">
                    <svg fill="white" viewBox="0 0 512 512" className="w-5 h-5">
                      <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path>
                    </svg>
                  </div>
                  <div className="absolute w-full h-full bg-gray-900 -z-10 rounded-lg pointer-events-none transition-all duration-300 group-hover:rotate-12 group-hover:origin-bottom"></div>
                </a>
              </div>
            </div>
          </div>

          {/* 🌐 Right Section (Image with Floating Icons) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            {/* Left Side Icons */}
            {/* <div className="absolute inset-0 pointer-events-none z-0">
              {leftSideIcons.map((icon, index) => (
                <div
                  key={icon.name}
                  className={`absolute ${icon.position} animate-wave ${icon.animationDelay}`}
                  style={{ animationDelay: icon.waveDelay }}
                >
                  <icon.icon className={`${icon.size} ${icon.color}  opacity-90 hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ))}
            </div> */}
            {/* Right Side Icons */}
            {/* <div className="absolute inset-0 pointer-events-none z-0">
              {rightSideIcons.map((icon, index) => (
                <div
                  key={icon.name}
                  className={`absolute ${icon.position} animate-wave ${icon.animationDelay}`}
                  style={{ animationDelay: icon.waveDelay }}
                >
                  <icon.icon className={`${icon.size} ${icon.color} hidde opacity-90 hover:opacity-100 transition-opacity duration-300`} />
                </div>
              ))}
            </div> */}


            {/* Profile Image */}
            <img
              src={ProfileCard}
              alt="Profile"
              className="w-3/4 sm:w-1/2 md:w-3/4 lg:w-6/12 mb-3 md:mr-40 md:mb-0 -mt-32 md:-mt-52 animate-float relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes wave {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(-5px) rotate(-3deg);
          }
          75% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;