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
    <section id="contact" className="min-h-screen relative w-full">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-12 text-center">
      Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div className="md:col-span-1 w-full">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 h-full w-full">
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
                <FaLinkedin size={20} className="text-gray-300 group-hover:text-white" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/leander1702" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors group relative">
                <FaGithub size={20} className="text-gray-300 group-hover:text-white" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>

              {/* Email */}
              <a href="mailto:leanderxavier71@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors group relative">
                <FaEnvelope size={20} className="text-gray-300 group-hover:text-white" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Email
                </span>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/_leando_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors group relative">
                <FaInstagramSquare size={20} className="text-gray-300 group-hover:text-white" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 w-full">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 w-full">
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
  
  <div className="border-t border-gray-700 mt-32 text-center w-full">
    <p className="text-gray-400 pt-10">
      © {new Date().getFullYear()} LeanderXavier. All rights reserved.
    </p>
  </div>
</section>
  );
};

export default Contact;