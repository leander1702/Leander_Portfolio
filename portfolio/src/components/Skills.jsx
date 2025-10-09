import React from 'react';
import { motion } from 'framer-motion';
import {
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoGit,
  BiLogoGithub,
  BiLogoTypescript
} from 'react-icons/bi';
import { SiExpress, SiAwsamplify, SiVercel, SiElectron, SiPostman, SiCanva, SiFigma, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: 'HTML5', icon: BiLogoHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: BiLogoCss3, color: 'text-blue-600' },
        { name: 'JavaScript', icon: BiLogoJavascript, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: BiLogoTypescript, color: 'text-blue-600' },
        { name: 'React js', icon: BiLogoReact, color: 'text-blue-500' },
        { name: 'Electron.js', icon: SiElectron, color: 'text-teal-400' },
        { name: 'Bootstrap', icon: BiLogoBootstrap, color: 'text-purple-600' },
        { name: 'Tailwind CSS', icon: BiLogoTailwindCss, color: 'text-cyan-400' },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: 'Node.js', icon: BiLogoNodejs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
        { name: 'MongoDB', icon: BiLogoMongodb, color: 'text-green-600' },
        { name: 'Firebase', icon: SiFirebase, color: 'text-amber-500' }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: 'Git', icon: BiLogoGit, color: 'text-orange-600' },
        { name: 'GitHub', icon: BiLogoGithub, color: 'text-gray-300' },
        { name: 'AWS', icon: SiAwsamplify, color: 'text-orange-500' },
        { name: 'Vercel', icon: SiVercel, color: 'text-white' },
        { name: 'VS Code', icon: VscVscode, color: 'text-blue-500' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'Canva', icon: SiCanva, color: 'text-blue-400' },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-500' }
      ]
    }
  ];

  return (
    <div className="bg-black py-12 ">     
     <iframe
        src="https://lottie.host/embed/e5a10897-6764-4ce4-8d91-7c5ce71659fc/2aCApT2pGp.lottie"
        className="w-full h-[200px] md:h-[400px] border-0"
        allowFullScreen
      ></iframe>
      {/* Heading & description */}
      <div className="max-w-2xl mx-auto text-center mb-12 px-4">
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

      {/* Skills Categories - Horizontal Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-1 gap-8"
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {category.skills.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl 
                               bg-gray-800/30 border border-gray-600 
                               text-center hover:border-cyan-400/50
                               transition-all duration-300"
                  >
                    <tech.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${tech.color}`} />
                    <p className="text-white font-medium text-xs sm:text-sm mt-2">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;