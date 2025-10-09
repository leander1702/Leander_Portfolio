import React from 'react'
import responsive from '../components/Asstes/Responsive1.svg'
const Quality = () => {
  return (
    <section className="relative bg-black text-center overflow-hidden py-12 ">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
        My Quality{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Services
        </span>
      </h1>

      {/* Subtitle */}
      <h3 className="text-base text-center sm:text-lg md:text-xl text-gray-100 max-w-5xl mx-auto px-4 sm:px-8 md:px-12 leading-relaxed  md:text-center">
        I design and build visually stunning, responsive websites with modern UI
        that deliver smooth, engaging experiences on every device.
      </h3>

      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-3xl"></div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10 sm:mt-14 md:mt-16 mb-8 px-2">
        <div className="relative w-full max-w-2xl sm:max-w-md md:max-w-2xl lg:max-w-7xl rounded-2xl overflow-hidden bg-gradient-to-t from-black via-blue-600 to-blue-900 p-1  md:p-2">
          <img
            // src="https://themejunction.net/html/gerold/assets/img/hero/hero-images.png"
            src={responsive}
            alt="Profile"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Quality
