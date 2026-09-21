import { useEffect, useRef } from 'react'
import SpotlightCard from './common/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      tl.fromTo(
        '.about-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          '.about-card',
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          '.about-paragraph',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          '.about-tag',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)' },
          '-=0.3'
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const highlightTags = [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'REST APIs',
    'JWT Auth',
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="about-header text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// PROFILE OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gradient-text">
            About Me
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Passionate MERN Stack Developer focused on building scalable,
            responsive, and high-performance web applications.
          </p>
        </div>

        {/* Glass Spotlight Card */}
        <div className="about-card max-w-4xl mx-auto">
          <SpotlightCard className="p-6 sm:p-10 md:p-12 border border-white/10 rounded-3xl relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-3xl pointer-events-none" />

            <div className="space-y-6 text-gray-300 text-sm sm:text-base sm:leading-8 leading-7 relative z-10">
              <p className="about-paragraph text-base sm:text-lg text-white font-medium">
                I am a passionate <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with experience in building modern, scalable, and high-performance web applications.
              </p>

              <p className="about-paragraph">
                I specialize in React.js, Next.js, Node.js, Express.js,
                MongoDB, MySQL, JWT Authentication, REST APIs,
                and responsive UI development.
              </p>

              <p className="about-paragraph">
                I have worked on e-commerce platforms, HRMS systems,
                property rental management applications, and fitness websites.
              </p>

              {/* Tag Showcase */}
              <div className="pt-4 flex flex-wrap gap-2 sm:gap-2.5">
                {highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="about-tag px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/10 text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>

      </div>
    </section>
  )
}

export default About