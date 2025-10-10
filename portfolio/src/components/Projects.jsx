import React from 'react';
import project1 from '../components/Asstes/projects/project1.jpg'
import project2 from '../components/Asstes/projects/project2.jpg'
import project3 from '../components/Asstes/projects/project3.jpeg'

const Projects = () => {
  const projects = [
    {
      title: "Makeup Artist Portfolio",
      description: "A modern and elegant portfolio website for a makeup artist, featuring services, gallery, and contact options to attract clients.",
      tech: ["React js","HTML","JavaScript","Tailwind CSS"],
      link: "https://makeup-artist-jayashri.vercel.app",
      image: project2
    },
    // {
    //   title: "Billing Software",
    //   description: "Web-based billing application with invoice generation, payment tracking, and reporting features.",
    //   tech: ["Electron js","React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    //   link: "https://billing-invoices.vercel.app/#/",
    //   image: project1
    // },
    {
      title: "F&F - Fill your Tank and Fix your Vehicle",
      description: "Web app for on-demand fuel delivery and locating nearby mechanical shops with real-time fuel tracking and quick contact with repair services.",
      tech: ["React js","HTML", "CSS", "JavaScript",  "Google Maps API"],
      link: "#",
      image: project3
    },
    // {
    //   title: "Admin Dashboard",
    //   description: "Comprehensive admin dashboard for managing users, analytics, and system configurations.",
    //   tech: ["React js", "Tailwind CSS", "Node.js", "MongoDB"],
    //   link: "#",
    //   image: project1
    // },
  ];

  const ProjectCard = ({ project, index }) => (
    <div
      className="
        group
        relative
        bg-gray-900/70
        backdrop-blur-sm
        rounded-2xl
        shadow-xl shadow-black/50
        border border-gray-800
        overflow-hidden
        transition-all duration-500 ease-out
        hover:border-cyan-500/50
        hover:shadow-cyan-500/20
        hover:scale-[1.02]
      "
    >
      {/* Background radial gradient effect on hover */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 animate-pulse-slow rounded-2xl"></div>
      </div>

      {/* Image Container with Gradient Overlay */}
      <div className="relative h-56 md:h-64 overflow-hidden z-10">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>

        {/* Tech Stack Badge (Top Left) */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-black/80 text-blue-400 rounded-full text-sm font-medium border border-cyan-500/50 shadow-md shadow-cyan-500/10">
            {project.tech[0]}
          </span>
        </div>
        
        {/* "View Project" Button on Image Hover */}
        <div className="
          absolute inset-0 flex items-center justify-center
          bg-black/60 opacity-0 group-hover:opacity-100
          transition-opacity duration-300 z-20
        ">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500
              text-white font-semibold rounded-lg
              flex items-center gap-2
              transform -translate-y-2 opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-300 ease-out delay-150
              shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
            "
          >
            View Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-5 text-base">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6 border-t border-gray-800 pt-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="
                px-3 py-1
                bg-gray-800/80
                text-cyan-400
                rounded-full
                text-xs font-medium
                border border-cyan-700/50
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Index (always visible) */}
        <div className="flex items-center justify-end pt-4 border-t border-gray-700/50">
           <span className="text-gray-500 text-sm font-mono tracking-widest">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="min-h-screen md:mt-20 px-4 md:px-8 py-12 md:py-20  relative overflow-hidden">
      {/* Background mesh/blob effect for the section */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>


      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span> 
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto">
            Explore a collection of projects that define my passion for crafting innovative web experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <button className="
            px-10 py-4
            bg-gradient-to-r from-blue-800 to-cyan-700
            text-white font-semibold
            rounded-full
            shadow-xl shadow-cyan-500/20
            transition-all duration-300
            hover:shadow-cyan-500/40 hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-cyan-500/50
            text-lg
          ">
            <a href="https://github.com/leander1702" target="_blank" rel="noopener noreferrer">
            Explore Git
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;