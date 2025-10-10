import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagramSquare } from 'react-icons/fa'
import axios from 'axios';
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const footerSection = document.getElementById('contact')
    if (footerSection) {
      observer.observe(footerSection)
    }

    return () => {
      if (footerSection) {
        observer.unobserve(footerSection)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (submitError) setSubmitError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    try {
      const response = await axios.post(
        'https://portfolio-backend-plum-iota.vercel.app/send-email',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      if (!response.status || data.success !== true) {
        throw new Error(data.error || 'Failed to send message');
      }

      console.log('✅ Email sent successfully:', data);

      // Store form data in localStorage as backup
      const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'sent',
      };
      formSubmissions.push(newSubmission);
      localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      setSubmitError(error.response?.data?.error || error.message || 'Failed to send message. Please try again.');

      // Store failed submission in localStorage
      const formSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      const newSubmission = {
        ...formData,
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.response?.data?.error || error.message,
      };
      formSubmissions.push(newSubmission);
      localStorage.setItem('formSubmissions', JSON.stringify(formSubmissions));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen  relative">
      {/* <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-2xl shadow-2xl border border-emerald-300/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>           
            </div>

       
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rotate-45"></div>
          </div>
        </div>  */}

      <div className="container">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 text-center">
          Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 h-full">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Info</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Email</h4>
                    <a href="mailto:leanderxavier71@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      leanderxavier71@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Location</h4>
                    <p className="text-gray-400">Coimbatore, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-900/30 p-2 rounded-lg mr-4">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">Phone</h4>
                    <a href="tel:+919976610821" className="text-gray-400 hover:text-blue-400 transition-colors">
                      +91 99766 10821
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="font-medium text-gray-300 mb-4">Follow Me</h4>
                <div className="flex space-x-12">
                  {/* LinkedIn */}
                  <a href="//www.linkedin.com/in/leanderxavier17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors group relative">
                    {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg> */}
                    <FaLinkedin size={20} className="text-gray-300 group-hover:text-white" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub */}
                  <a href="https://github.com/leander1702" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors group relative">
                    {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg> */}
                    <FaGithub size={20} className="text-gray-300 group-hover:text-white" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      GitHub
                    </span>
                  </a>



                  {/* Email */}
                  <a href="mailto:leanderxavier71@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors group relative">
                    {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.99-7.713v16h24v-16l-12.01 7.713zM12 2l12 7.713-12 7.713-12-7.713z" />
                    </svg> */}
                    <FaEnvelope size={20} className="text-gray-300 group-hover:text-white" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Email
                    </span>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/_leando_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors group relative">
                    {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.918 4.918 0 011.675 1.003 4.918 4.918 0 011.003 1.675c.163.457.347 1.257.403 2.427.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.003 1.675 4.918 4.918 0 01-1.675 1.003c-.457.163-1.257.347-2.427.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.918 4.918 0 01-1.675-1.003 4.918 4.918 0 01-1.003-1.675c-.163-.457-.347-1.257-.403-2.427-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.918 4.918 0 011.003-1.675 4.918 4.918 0 011.675-1.003c.457-.163 1.257-.347 2.427-.403 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.765.131 4.656.32 3.7.676c-.963.354-1.787.825-2.61 1.648A7.02 7.02 0 00.676 3.7c-.356.956-.545 2.065-.604 3.352C.013 8.332 0 8.756 0 12s.013 3.668.072 4.948c.059 1.287.248 2.396.604 3.352.354.963.825 1.787 1.648 2.61a7.02 7.02 0 002.61 1.648c.956.356 2.065.545 3.352.604C8.332 23.987 8.756 24 12 24s3.668-.013 4.948-.072c1.287-.059 2.396-.248 3.352-.604a7.02 7.02 0 002.61-1.648 7.02 7.02 0 001.648-2.61c.356-.956.545-2.065.604-3.352.059-1.28.072-1.704.072-4.948s-.013-3.668-.072-4.948c-.059-1.287-.248-2.396-.604-3.352a7.02 7.02 0 00-1.648-2.61 7.02 7.02 0 00-2.61-1.648c-.956-.356-2.065-.545-3.352-.604C15.668.013 15.244 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 106.162 6.162A6.162 6.162 0 0012 5.838zm0 10.162a3.999 3.999 0 113.999-3.999A3.999 3.999 0 0112 16z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg> */}
                    <FaInstagramSquare size={20} className="text-gray-300 group-hover:text-white  " />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Instagram
                    </span>
                  </a>


                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
                {isSubmitted && (
                  <div className="bg-green-900 border border-green-700 text-green-200 p-4 rounded-lg mb-6">
                    <p className="font-semibold">✅ Message sent successfully!</p>
                    <p className="text-sm mt-1">Thank you for your message! I'll get back to you soon.</p>
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-900 border border-red-700 text-red-200 p-4 rounded-lg mb-6">
                    <p className="font-semibold">❌ Error sending message</p>
                    <p className="text-sm mt-1">{submitError}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <span>Sending...</span>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>
        </div>

      </div>

      {/* Ripple effect styles */}
      <style>
        {`
    .ripple {
      position: absolute;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.7);
      transform: scale(0);
      animation: ripple 0.6s linear;
    }
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `}
      </style>
      <div className="border-t border-gray-700 mt-32 text-center ">
        <p className="text-gray-400 pt-10">
          © {new Date().getFullYear()} LeanderXavier. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;