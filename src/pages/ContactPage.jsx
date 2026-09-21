import { useState, useEffect, useRef } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SpotlightCard from '../components/common/SpotlightCard'
import { useMagnetic } from '../hooks/useMagnetic'
import confetti from 'canvas-confetti'
import gsap from 'gsap'

const ContactPage = () => {
  const containerRef = useRef(null)
  const submitBtnRef = useMagnetic(0.2)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-page-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.contact-page-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', delay: 0.15 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#6366f1', '#a855f7', '#22c55e'],
      })
    } catch {
      // fallback safe
    }

    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="contact-page-header text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// LET'S CONNECT & COLLABORATE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading gradient-text">
            Contact Me
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Have a project in mind, an opportunity to discuss, or just want to connect?
            Feel free to send a message or reach out directly!
          </p>
        </div>

        {/* 2-Column Layout: Left Info & Right Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Spotlight Card */}
            <div className="contact-page-card">
              <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Direct Contact Info
                </h2>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:vikasfrontenddeveloper007@gmail.com"
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                      <FiMail className="text-lg" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] font-mono uppercase text-gray-400 block">Email Address</span>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover:text-blue-300 transition-colors font-medium break-all">
                        vikasfrontenddeveloper007@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+917011719443"
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <FiPhone className="text-lg" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-gray-400 block">Phone / Mobile</span>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover:text-emerald-300 transition-colors font-medium">
                        +91 7011719443
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917011719443"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="text-lg" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-gray-400 block">WhatsApp Chat</span>
                      <span className="text-xs sm:text-sm text-gray-200 group-hover:text-green-300 transition-colors font-medium">
                        Chat on WhatsApp (+91 7011719443)
                      </span>
                    </div>
                  </a>
                </div>

                {/* Location & Availability Status */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <FiMapPin className="text-purple-400 shrink-0 text-base" />
                    <span>Location: New Delhi / NCR, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
                    <FiClock className="text-blue-400 shrink-0 text-base" />
                    <span>Response Time: Typically under 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium w-fit">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    <span>Open for Full-Time & Freelance Roles</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-mono uppercase text-gray-400 block mb-3">Connect Online</span>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/jojovikas"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all text-xs font-medium"
                    >
                      <FiGithub className="text-base" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vikas-kumar-mondal-2b3781135/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all text-xs font-medium"
                    >
                      <FiLinkedin className="text-base" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="contact-page-card">
              <SpotlightCard className="p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-3xl pointer-events-none" />

                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                    Send a Message
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Fill out the form below and I'll get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:bg-blue-500/[0.03] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:bg-blue-500/[0.03] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. MERN Stack Web Application Development"
                      className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:bg-blue-500/[0.03] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Message *
                    </label>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, requirements, or inquiry..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:bg-blue-500/[0.03] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
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
              </SpotlightCard>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactPage
