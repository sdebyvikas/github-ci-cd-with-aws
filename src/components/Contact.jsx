import { useState, useEffect, useRef } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import SpotlightCard from './common/SpotlightCard'
import { useMagnetic } from '../hooks/useMagnetic'
import confetti from 'canvas-confetti'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const sectionRef = useRef(null)
  const submitBtnRef = useMagnetic(0.2)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.contact-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Form container reveal
      gsap.fromTo(
        '.contact-card',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )

      // Input items stagger
      gsap.fromTo(
        '.contact-input-group',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-card',
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#6366f1', '#a855f7'],
      })
    } catch {
      // fallback safe
    }

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gradient-text">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Let's connect and build something amazing together.
          </p>
        </div>

        {/* Contact Spotlight Card */}
        <div className="contact-card">
          <SpotlightCard className="p-6 sm:p-10 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            {/* Top ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="contact-input-group">
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm sm:text-base focus:border-blue-500 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              <div className="contact-input-group">
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm sm:text-base focus:border-blue-500 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 shadow-inner"
                />
              </div>

              <div className="contact-input-group">
                <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm sm:text-base focus:border-blue-500 focus:bg-blue-500/[0.03] focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 shadow-inner resize-none"
                ></textarea>
              </div>

              <div className="contact-input-group pt-2">
                <div ref={submitBtnRef} className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.6)] cursor-pointer group"
                  >
                    {submitted ? (
                      <>
                        <FiCheck className="text-lg" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Direct Contact Details */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
                <a
                  href="mailto:vikasfrontenddeveloper007@gmail.com"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-blue-400 hover:text-blue-400 transition break-all"
                >
                  <FiMail className="text-blue-400 shrink-0" />
                  <span>vikasfrontenddeveloper007@gmail.com</span>
                </a>

                <a
                  href="tel:+917011719443"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-blue-400 hover:text-blue-400 transition"
                >
                  <FiPhone className="text-green-400 shrink-0" />
                  <span>+91 7011719443</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <a
                  href="https://github.com/jojovikas"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300 text-xs sm:text-sm font-medium"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vikas-kumar-mondal-2b3781135/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all duration-300 text-xs sm:text-sm font-medium"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default Contact