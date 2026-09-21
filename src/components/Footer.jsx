import { Link } from 'react-router-dom'
import { useLenis } from '../context/LenisProvider'
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { useMagnetic } from '../hooks/useMagnetic'

const Footer = () => {
  const { scrollTo } = useLenis()
  const topBtnRef = useMagnetic(0.2)

  const footerLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (scrollTo) {
      scrollTo(0)
    }
  }

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 bg-[#03050d] text-gray-400 text-xs sm:text-sm overflow-hidden z-10">
      {/* Top glowing accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-flex items-center gap-2 group mb-2">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                VK
              </span>
              <span className="text-xl font-bold tracking-tight font-heading text-white">
                Vikas <span className="gradient-text">Kumar</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs max-w-sm mt-1">
              Building scalable, responsive, and high-performance MERN stack web applications.
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/jojovikas"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 flex items-center justify-center text-base transition-all"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-kumar-mondal-2b3781135/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 flex items-center justify-center text-base transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:vikasfrontenddeveloper007@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 flex items-center justify-center text-base transition-all"
              aria-label="Email"
            >
              <FiMail />
            </a>
            <a
              href="tel:+917011719443"
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 flex items-center justify-center text-base transition-all"
              aria-label="Phone"
            >
              <FiPhone />
            </a>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Vikas Kumar</span>. All rights reserved.
          </p>

          {/* Back to top */}
          <div ref={topBtnRef}>
            <button
              onClick={handleBackToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-blue-400/40 hover:text-white transition-all text-xs font-mono text-gray-400 cursor-pointer"
            >
              <span>Back to top</span>
              <FiArrowUp className="text-blue-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer