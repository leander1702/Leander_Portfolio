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
    <div className="min-h-screen p-6 sm:p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-12 sm:mb-16">
          About <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Me</span> 
        </h1>

        {/* Two-Column Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* LEFT COLUMN: Expertise Cards */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">My Core Expertise</h2>
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-xl shadow-lg transition duration-300 hover:bg-gray-700"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <div className="bg-blue-500 p-3 rounded-full flex items-center justify-center">
                    <item.icon className="text-white font-semibold text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-base font-light text-gray-400 ml-2">
                  {item.projects}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Summary & Education */}
          <div className="md:w-2/3">
            {/* Brief Summary */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Who I Am</h2>
              <p className="text-base sm:text-lg text-justify text-white leading-relaxed">
                I am a Frontend developer specializing in building responsive, user-friendly, and visually appealing web applications. Skilled in <span className="text-blue-400 font-semibold">React, JavaScript, and modern web technologies</span>, I focus on turning designs into seamless, high-performance digital experiences that meet both user needs and business goals.
              </p>
            </div>

            {/* Dotted separator */}
            <div className="border-t border-dashed border-gray-600 mt-4 pt-2"></div>

            {/* Education Section */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Education</h2>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* M.Sc. Degree */}
                <div className="bg-gray-800 p-6 rounded-xl border border-blue-700 flex-1">
                  <p className="text-lg font-bold text-white mb-2">
                    <span className="text-blue-400">🎓</span> M.Sc. Computer Science
                  </p>
                  <p className="text-sm italic text-gray-300">Bishop Heber College (2021 – 2023)</p>
                  <p className="text-sm text-white mt-2">
                    <span className="text-blue-400">▪</span> Percentage: <strong className="font-semibold">75.20%</strong>
                  </p>
                </div>

                {/* B.Sc. Degree */}
                <div className="bg-gray-800 p-6 rounded-xl border border-blue-700 flex-1">
                  <p className="text-lg font-bold text-white mb-2">
                    <span className="text-blue-400">🎓</span> B.Sc. Computer Science
                  </p>
                  <p className="text-sm italic text-gray-300">Bishop Heber College (2018 – 2021)</p>
                  <p className="text-sm text-white mt-2">
                    <span className="text-blue-400">▪</span> Percentage: <strong className="font-semibold">75.90%</strong>
                  </p>
                </div>
              </div>

              {/* Dotted separator */}
              <div className="border-t border-dashed border-gray-600 mt-4 pt-2"></div>

              {/* Freelance Badge */}
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Freelance</h2>
              <div className="bg-gray-800 w-fit px-4 py-2 rounded-xl border border-blue-700 flex items-center gap-3">
                <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
                <p className="text-lg font-bold text-white">
                  Available
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
