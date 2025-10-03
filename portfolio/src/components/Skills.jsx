import React from 'react';
import { motion } from 'framer-motion';
import {
  BiLogoReact,
  BiLogoAngular,
  BiLogoVuejs,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoBootstrap
} from 'react-icons/bi';
import { SiExpress, SiAwsamplify } from "react-icons/si";

const Skills = () => {
  const technologies = [
    { name: 'HTML5', icon: BiLogoHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: BiLogoCss3, color: 'text-blue-600' },
    { name: 'JavaScript', icon: BiLogoJavascript, color: 'text-yellow-400' },
    { name: 'BootStrap', icon: BiLogoBootstrap, color: 'text-purple-600' },
    { name: 'React', icon: BiLogoReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: BiLogoNodejs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-white' },
    { name: 'MongoDB', icon: BiLogoMongodb, color: 'text-green-600' },
    { name: 'Tailwind', icon: BiLogoTailwindCss, color: 'text-cyan-400' },
    { name: 'AWS', icon: SiAwsamplify, color: 'text-orange-500' }
  ];

  return (
    <div className="bg-black py-6 md:py-0">
      {/* Heading & description */}
      <div className="max-w-2xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
          Tech
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {' '}Skills
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
          We put your ideas and thus your wishes in the form of a unique web project
          that inspires you and your customers.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-10 sm:space-y-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 p-4 sm:p-6 w-full max-w-[220px] rounded-xl 
                           bg-gray-800/50 border border-gray-700 shadow-md 
                           backdrop-blur-md text-center"
              >
                <tech.icon className={`w-14 h-14 sm:w-16 sm:h-16 ${tech.color}`} />
                <p className="text-white font-semibold text-sm sm:text-base mt-2">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
