import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaMagic } from "react-icons/fa";

const expertiseData = [
  {
    title: 'Modern Website Design',
    projects: 'Craft visually appealing, user-friendly, and mobile-responsive websites.',
    icon: FaLaptopCode,
  },
  {
    title: 'Mobile App Interface Development',
    projects: 'Build pixel-perfect, interactive mobile app frontends using frameworks like React Native.',
    icon: FaMobileAlt,
  },
  {
    title: 'Interactive & Dynamic Experiences',
    projects: 'Develop fast, dynamic, and scalable frontends using React.js.',
    icon: FaMagic,
  }
];

const About = () => {
  return (
    <div className="min-h-screen p-4 md:p-16">
      <div className=" mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center  md:mb-16">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Me</span>
        </h1>

        {/* Two-Column Layout */}
        <div class="flex flex-col md:flex-row gap-8 md:gap-12">
                
                <div class="md:w-1/2 flex justify-center items-center">
                    <div class="w-full max-w-md md:max-w-lg">
                        <iframe
                            src="https://lottie.host/embed/cafce2d3-6bb7-4dcb-bdc3-8256e99376ac/aQXU2sP2GQ.lottie"
                            class="w-full h-96 sm:h-80 md:h-[550px] rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
                
              
                <div class="md:w-1/2">
                  
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                            <i class="fas fa-user mr-2"></i> Who I Am
                        </h2>
                        <p class="text-base sm:text-lg text-justify text-gray-300 leading-relaxed">
                            I am a Frontend developer specializing in building responsive, user-friendly, and visually appealing web applications. Skilled in <span class="text-blue-400 font-semibold">React, JavaScript, and modern web technologies</span>, I focus on turning designs into seamless, high-performance digital experiences that meet both user needs and business goals.
                        </p>
                    </div>
                    
                  
                    <div class="border-t border-dashed border-gray-700 my-6"></div>
                    
                  
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                            <i class="fas fa-graduation-cap mr-2"></i> Education
                        </h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           
                            <div class="education-card bg-gray-800 p-6 rounded-xl border border-blue-700">
                                <div class="flex items-start mb-3">
                                    <i class="fas fa-university text-blue-400 text-xl mr-3 mt-1"></i>
                                    <div>
                                        <p class="text-lg font-bold text-white">M.Sc. Computer Science</p>
                                        <p class="text-sm italic text-gray-400">Bishop Heber College (2021 – 2023)</p>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-300 mt-2">
                                    <i class="fas fa-percentage text-blue-400 mr-2"></i> Percentage: <strong class="font-semibold text-white">75.20%</strong>
                                </p>
                            </div>

                         
                            <div class="education-card bg-gray-800 p-6 rounded-xl border border-blue-700">
                                <div class="flex items-start mb-3">
                                    <i class="fas fa-university text-blue-400 text-xl mr-3 mt-1"></i>
                                    <div>
                                        <p class="text-lg font-bold text-white">B.Sc. Computer Science</p>
                                        <p class="text-sm italic text-gray-400">Bishop Heber College (2018 – 2021)</p>
                                    </div>
                                </div>
                                <p class="text-sm text-gray-300 mt-2">
                                    <i class="fas fa-percentage text-blue-400 mr-2"></i> Percentage: <strong class="font-semibold text-white">75.90%</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="border-t border-dashed border-gray-700 my-6"></div>

                    
                    <div>
                        <h2 class="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                            <i class="fas fa-laptop-code mr-2"></i> Freelance
                        </h2>
                        <div class="bg-gray-800 w-fit px-4 py-3 rounded-xl border border-blue-700 flex items-center gap-3 education-card">
                            <span class="w-3 h-3 bg-green-500 rounded-full pulse-dot"></span>
                            <p class="text-lg font-bold text-white">
                                Available for Projects
                            </p>
                        </div>                       
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default About;
