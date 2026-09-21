import { useState, useEffect } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useMagnetic } from '../hooks/useMagnetic'

const FloatingButton = ({ href, bg, icon, label }) => {
  const magneticRef = useMagnetic(0.3)

  return (
    <div ref={magneticRef} className="relative group">
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0b1120] border border-white/10 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        {label}
      </span>

      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl ${bg} text-white shadow-[0_8px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-all duration-300 flex items-center justify-center text-xl sm:text-2xl cursor-pointer relative overflow-hidden`}
        aria-label={label}
      >
        <span className="relative z-10">{icon}</span>
        <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </a>
    </div>
  )
}

const FloatingButtons = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Call Button */}
      <FloatingButton
        href="tel:+917011719443"
        bg="bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-blue-500/25"
        icon={<FiPhoneCall />}
        label="Call Vikas"
      />

      {/* WhatsApp Button */}
      <FloatingButton
        href="https://wa.me/917011719443"
        bg="bg-gradient-to-tr from-emerald-600 to-green-500 shadow-green-500/25"
        icon={<FaWhatsapp />}
        label="WhatsApp"
      />
    </div>
  )
}

export default FloatingButtons