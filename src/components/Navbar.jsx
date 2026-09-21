import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useMagnetic } from '../hooks/useMagnetic'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
]

const NavItemLink = ({ item, currentPath, onClick }) => {
  const magneticRef = useMagnetic(0.2)
  const isActive = currentPath === item.path

  return (
    <NavLink
      ref={magneticRef}
      to={item.path}
      onClick={onClick}
      className={`relative px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
        isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
      }`}
    >
      {item.label}
      {isActive && (
        <span className="absolute inset-0 bg-blue-500/15 border border-blue-500/30 rounded-full -z-10 shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300" />
      )}
      {isActive && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
      )}
    </NavLink>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const logoRef = useMagnetic(0.25)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on location change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#050816]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          ref={logoRef}
          className="cursor-pointer group flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300">
            VK
          </span>
          <span className="text-xl sm:text-2xl font-bold tracking-tight font-heading text-white">
            Vikas <span className="gradient-text">Kumar</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-inner">
          {navItems.map((item) => (
            <NavItemLink
              key={item.path}
              item={item}
              currentPath={location.pathname}
            />
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.15)] cursor-pointer"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-white hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          menuOpen ? 'max-h-[480px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 bg-[#0b1120]/95 backdrop-blur-2xl py-6 mx-4 rounded-2xl border border-white/10 shadow-2xl">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2.5 px-6 rounded-xl transition-all cursor-pointer w-4/5 text-center ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/40 font-semibold shadow-lg shadow-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </NavLink>
            )
          })}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 px-8 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar