import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiDownload, FiArrowRight, FiCheckCircle, FiAward, FiBookOpen, FiCode, FiLayers } from 'react-icons/fi'
import SpotlightCard from '../components/common/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-anim-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )

      gsap.fromTo(
        '.about-anim-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const coreStrengths = [
    {
      icon: <FiCode className="text-blue-400 text-2xl" />,
      title: 'Full Stack MERN Mastery',
      desc: 'Expertise across React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL to deliver end-to-end web solutions.',
    },
    {
      icon: <FiLayers className="text-purple-400 text-2xl" />,
      title: 'Scalable Architecture',
      desc: 'Building modular component systems, secure RESTful APIs, role-based access control (RBAC), and JWT authentication.',
    },
    {
      icon: <FiCheckCircle className="text-emerald-400 text-2xl" />,
      title: 'Performance & Optimization',
      desc: 'Optimized rendering, fast page load speeds, SEO best practices, and smooth GSAP/Lenis user interactions.',
    },
    {
      icon: <FiAward className="text-amber-400 text-2xl" />,
      title: 'Real-World Production Delivery',
      desc: 'Delivered CRM platforms, HRMS portals, property rental apps, e-commerce stores, and enterprise solutions for Tech Mahindra clients.',
    },
  ]

  const highlights = [
    '3+ Years of Professional Web Development Experience',
    'Currently Developing Enterprise Solutions at Bizclock Infotech Pvt. Ltd.',
    'Engineered 12+ Production & Client Websites',
    'Specialized in Modern Frontend (React 19, Next.js, Tailwind CSS)',
    'Robust Backend Engineering with Node.js, Express & MongoDB',
    'Strong focus on Responsive Design and Pixel-Perfect UI/UX',
  ]

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="about-anim-header text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// ABOUT VIKAS KUMAR</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading gradient-text">
            About Me
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Passionate MERN Stack Developer dedicated to crafting high-performance,
            scalable, and visually stunning digital experiences.
          </p>
        </div>

        {/* Top Profile & Story Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Avatar Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 blur-2xl opacity-40 rounded-3xl group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 p-2 bg-[#0b1120]/80 backdrop-blur-xl">
                <img
                  src="/Image.png"
                  alt="Vikas Kumar"
                  className="w-full max-w-sm sm:max-w-md h-auto rounded-2xl object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-white font-heading">Vikas Kumar</h3>
                  <p className="text-blue-400 text-sm font-medium">MERN Stack Developer</p>
                  <p className="text-gray-400 text-xs mt-1">Based in New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">
                Hi, I'm Vikas <span className="text-blue-400">👋</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a passionate and results-driven <strong className="text-white">MERN Stack Developer</strong> with over 3 years of hands-on experience in building modern, scalable, and responsive web applications.
                </p>
                <p>
                  Currently, I work at <strong className="text-blue-300">Bizclock Infotech Private Limited</strong>, where I develop full-stack applications, build enterprise solutions (like the AIM Software for Comviva/Tech Mahindra), manage REST APIs, and ensure robust security with JWT authentication.
                </p>
                <p>
                  My philosophy revolves around writing clean, maintainable code, building delightful user interfaces with smooth animations, and designing efficient backend architectures that scale seamlessly.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                <a
                  href="/Vikas_Mern_Developer.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                >
                  <FiDownload className="text-base" />
                  <span>Download Resume</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all duration-300 hover:border-blue-400/40 cursor-pointer"
                >
                  <span>Get In Touch</span>
                  <FiArrowRight />
                </Link>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Highlights List & Education */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Key Highlights */}
          <div className="about-anim-card">
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <FiAward className="text-xl" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">Professional Highlights</h3>
              </div>

              <div className="space-y-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-blue-400 mt-1 shrink-0 text-base" />
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Education & Values */}
          <div className="about-anim-card">
            <SpotlightCard className="p-6 sm:p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <FiBookOpen className="text-xl" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">Education & Foundations</h3>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 mb-6">
                  <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                    <span>GRADUATION</span>
                    <span>2020 - 2023</span>
                  </div>
                  <h4 className="text-base font-semibold text-white">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-gray-400 text-xs">
                    Comprehensive study of software engineering, database management systems, data structures, and web technologies.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-purple-950/40 border border-blue-500/20 text-xs text-gray-300 leading-relaxed">
                <span className="text-blue-300 font-semibold block mb-1">💡 Engineering Approach:</span>
                Continuous learner committed to modern web architecture, clean code standards, and delivering high client satisfaction.
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* Core Strengths Grid */}
        <div className="about-anim-card space-y-6">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              What I Bring to the Table
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Key competencies that drive successful product delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreStrengths.map((item, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="about-anim-card rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/30 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-3">
            Interested in Working Together?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Whether you need a full-stack web application, a modern React/Next.js frontend, or a custom API backend, I'm ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/30 transition-all"
            >
              Explore My Projects
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              Contact Vikas
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage
