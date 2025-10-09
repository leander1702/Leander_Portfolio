import React from 'react';

const Experience = () => {
  const experiences = [ 
    {
      period: "June 2025",
      endDate: "Present",
      title: "Frontend Developer",
      company: "Adventure Technology Solutions Pvt. Ltd. — Coimbatore",
      description:
        "Building admin dashboards and websites with React.js and Tailwind, integrated with Node.js/Express/MongoDB. Skilled in Git, and cloud deployments (AWS, Render, Vercel).",
    },
    {
      period: "March 2025",
      endDate: "June 2025",
      title: "Frontend Developer Intern",
      company: "Adventure Technology Solutions Pvt. Ltd. — Coimbatore",
      description:
        "Built static websites and CRUD functionalities using React.js and Tailwind CSS. Contributed to frontend-backend integration with Node.js, Express.js, and MongoDB. Gained practical experience in deploying applications on Vercel and Render.",
    },
    {
      period: "June 2024",
      endDate: "November 2024",
      title: "Frontend Development Trainee",
      company: "Glacier Technologies — Coimbatore",
      description:
        "Completed intensive training in React.js, JavaScript (ES6+), HTML5, and CSS3. Developed multiple projects including a personal portfolio and a fuel delivery app with responsive UI and CRUD operations. Applied Git/GitHub workflows and industry best practices.",
    }
  ];

  return (
    <div className="md:mt-20 py-6 md:py-0 px-4 sm:px-2">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-100 mb-4 sm:mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Experience</span>
          </h1>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8 sm:space-y-16 sm:px-10 md:px-20">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:gap-8">
              {/* Timeline Dot & Line Container */}
               <div className="relative flex flex-col -pr- items-center w-16 md:w-20 md:flex">
                {/* Dot */}
                <div className="relative z-10 top-12 md:top-0">
                  <div className="w-5 h-5 md:w-6 md:h-6 relative">
                    <div className="absolute inset-1 bg-blue-600 rounded-full z-10"></div>
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Line */}
                {index !== experiences.length && (
                  <div className="absolute top-20 md:top-10   h-64 md:h-56 w-0.5 bg-white z-0"></div>
                )}
              </div>

              {/* Content Section - Right Side */}
              <div className="sm:w-full">
                {/* Date Section - Left Side */}
                <div className="sm:text-left text-right mb-4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">
                    <span className="text-sm font-semibold">{exp.period}</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl ml-12 sm:ml-0 transition-shadow duration-300">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-base sm:text-lg text-blue-300 font-semibold mb-2 sm:mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;