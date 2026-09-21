import { useEffect, useRef } from 'react'
import SpotlightCard from './common/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const frontendSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Next.js',
  'Redux',
  'Bootstrap',
  'Tailwind CSS',
]

const backendSkills = [
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'JWT Authentication',
  'RESTful APIs',
  'Middleware',
  'RBAC',
  'Laravel Basics',
]

const SkillChip = ({ skill, accent = 'blue' }) => {
  return (
    <div
      className={`skill-chip group px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer ${
        accent === 'blue'
          ? 'hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)]'
          : 'hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]'
      }`}
    >
      <span
        className={`font-medium text-xs sm:text-sm tracking-wide transition-colors ${
          accent === 'blue' ? 'text-gray-200 group-hover:text-blue-300' : 'text-gray-200 group-hover:text-purple-300'
        }`}
      >
        {skill}
      </span>
    </div>
  )
}

const Skills = () => {
  const sectionRef = useRef(null)
  const leftCardRef = useRef(null)
  const rightCardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.skills-header',
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

      // Left Card: Slide from left
      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Right Card: Slide from right
      gsap.fromTo(
        rightCardRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rightCardRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )

      // Chips staggered entrance
      gsap.fromTo(
        '.skill-chip',
        { opacity: 0, y: 15, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="skills-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// TECH STACK & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gradient-text">
            Technical Skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Specialized in modern frontend and backend technologies
            for building scalable, responsive, and high-performance web applications.
          </p>
        </div>

        {/* 2-Column Skill Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Frontend Skills Card */}
          <div ref={leftCardRef}>
            <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-3xl h-full border border-white/10 hover:border-blue-500/40 transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-center sm:text-left">
                <div className="w-14 h-14 mx-auto sm:mx-0 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-2xl shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  💻
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-blue-400">
                    Frontend Technologies
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Modern UI Development & Responsive Design
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-3">
                {frontendSkills.map((skill) => (
                  <SkillChip key={skill} skill={skill} accent="blue" />
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* Backend Skills Card */}
          <div ref={rightCardRef}>
            <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-3xl h-full border border-white/10 hover:border-purple-500/40 transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-center sm:text-left">
                <div className="w-14 h-14 mx-auto sm:mx-0 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-2xl shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                  ⚙️
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-purple-400">
                    Backend Technologies
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    API Development, Authentication & Database Management
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2.5 sm:gap-3">
                {backendSkills.map((skill) => (
                  <SkillChip key={skill} skill={skill} accent="purple" />
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills