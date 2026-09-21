import { useEffect, useRef } from 'react'
import SpotlightCard from './common/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const experiences = [
  {
    company: 'Bizclock Infotech Private Limited',
    role: 'MERN Stack / Frontend Developer',
    duration: 'Dec 2024 – Present',
    current: true,
    points: [
      'Developed responsive frontend applications using React.js.',
      'Built scalable REST APIs using Node.js and Express.js.',
      'Integrated MongoDB and MySQL databases.',
      'Implemented JWT authentication and secure API workflows.',
    ],
  },
  {
    company: 'Neelkanth Education',
    role: 'Website Developer (Frontend)',
    duration: 'Jun 2024 – Dec 2024',
    current: false,
    points: [
      'Developed responsive web applications using React.js and JavaScript.',
      'Integrated APIs using Axios and Fetch API.',
      'Improved UI/UX and application accessibility.',
    ],
  },
  {
    company: 'SD Educom',
    role: 'Website Designer / Frontend Developer',
    duration: 'Apr 2023 – Jun 2024',
    current: false,
    points: [
      'Created responsive layouts using HTML, CSS, and Bootstrap.',
      'Developed interactive UI features with JavaScript.',
      'Ensured cross-browser compatibility and modern design consistency.',
    ],
  },
]

const Experience = () => {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)
  const lineProgressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.exp-header',
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

      // Timeline vertical line drawing with scroll scrub
      gsap.fromTo(
        lineProgressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 75%',
            scrub: 0.5,
          },
        }
      )

      // Cards staggered reveal & node illumination
      const cards = gsap.utils.toArray('.exp-card')
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          }
        )
      })

      const nodes = gsap.utils.toArray('.exp-node')
      nodes.forEach((node) => {
        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: node,
              start: 'top 80%',
              once: true,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="exp-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// CAREER PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gradient-text">
            Work Experience
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            My professional journey in frontend and full-stack development,
            building scalable and high-performance web applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative pl-6 sm:pl-10 space-y-12">
          {/* Background Timeline Rail */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-white/10" />

          {/* Active Growing Timeline Progress Rail */}
          <div
            ref={lineProgressRef}
            className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 origin-top shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          />

          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Dot */}
              <div className="exp-node absolute -left-[23px] sm:-left-[29px] top-6 w-5 h-5 rounded-full bg-[#050816] border-2 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.6)] flex items-center justify-center z-20">
                <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`} />
              </div>

              {/* Experience Card */}
              <div className="exp-card">
                <SpotlightCard className={`p-6 sm:p-8 md:p-10 rounded-3xl border transition-all duration-300 ${
                  exp.current
                    ? 'border-blue-500/30 bg-blue-950/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                    : 'border-white/10'
                }`}>
                  {/* Card Top Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold font-heading text-blue-400">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-green-500/10 border border-green-500/30 text-green-300">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-base sm:text-lg text-gray-200 font-medium mt-1">
                        {exp.role}
                      </p>
                    </div>

                    <div className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-blue-300 text-xs sm:text-sm font-mono w-fit">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                    {exp.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience