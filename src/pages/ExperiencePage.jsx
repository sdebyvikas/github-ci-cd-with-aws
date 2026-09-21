import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiDownload, FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import SpotlightCard from '../components/common/SpotlightCard'
import gsap from 'gsap'

const detailedExperiences = [
  {
    company: 'Bizclock Infotech Private Limited',
    location: 'Noida / Delhi NCR, India',
    role: 'MERN Stack / Frontend Developer',
    duration: 'Dec 2024 – Present',
    type: 'Full-time',
    current: true,
    summary:
      'Spearheading full-stack web development across enterprise clients and in-house SaaS platforms, focusing on React.js, Next.js, Node.js, and scalable REST architectures.',
    responsibilities: [
      'Architected and delivered AIM Software for Comviva (Tech Mahindra) handling lead workflows, customer management, and enterprise operations.',
      'Developed modern, responsive frontend user interfaces using React.js, Tailwind CSS, and custom UI components.',
      'Designed and deployed high-performance RESTful APIs using Node.js and Express.js with robust error-handling pipelines.',
      'Integrated MongoDB and MySQL databases with schema validations and query optimization for low latency.',
      'Implemented JWT (JSON Web Token) authentication workflows, password encryption, and Role-Based Access Control (RBAC).',
      'Collaborated closely with cross-functional teams, QA testers, and product managers to ensure agile delivery sprints.',
    ],
    techStack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'REST APIs', 'Git'],
  },
  {
    company: 'Neelkanth Education',
    location: 'Delhi, India',
    role: 'Website Developer (Frontend)',
    duration: 'Jun 2024 – Dec 2024',
    type: 'Full-time',
    current: false,
    summary:
      'Responsible for frontend development, student portal integrations, responsive UI design, and website performance enhancements.',
    responsibilities: [
      'Built responsive web applications and dynamic dashboards using React.js and vanilla JavaScript.',
      'Integrated complex third-party APIs and backend endpoints using Axios and Fetch API with comprehensive error handling.',
      'Revamped UI/UX design systems to improve user accessibility, bounce rates, and mobile user experience.',
      'Managed and optimized educational coaching platforms and WordPress content systems.',
    ],
    techStack: ['React.js', 'JavaScript (ES6+)', 'Axios', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs'],
  },
  {
    company: 'SD Educom',
    location: 'Delhi, India',
    role: 'Website Designer / Frontend Developer',
    duration: 'Apr 2023 – Jun 2024',
    type: 'Full-time',
    current: false,
    summary:
      'Developed and designed responsive client websites, interactive web pages, and educational portal layouts.',
    responsibilities: [
      'Created modular, responsive website layouts and interactive templates using HTML5, CSS3, Bootstrap, and JavaScript.',
      'Engineered engaging user interfaces with CSS animations, interactive modals, and form validations.',
      'Ensured seamless cross-browser compatibility and optimized mobile responsiveness across various screen resolutions.',
      'Maintained version control workflows and assisted clients with website deployment and content updates.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'UI/UX Design', 'Responsive Web'],
  },
]

const ExperiencePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-page-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.exp-page-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="exp-page-header text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// CAREER JOURNEY & ROLES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading gradient-text">
            Work Experience
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Detailed timeline of my professional roles, engineering contributions,
            and technological impact across client and enterprise systems.
          </p>
        </div>

        {/* Career Timeline Cards */}
        <div className="space-y-10">
          {detailedExperiences.map((exp, index) => (
            <div key={index} className="exp-page-card">
              <SpotlightCard
                className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
                  exp.current
                    ? 'border-blue-500/40 bg-gradient-to-b from-[#0b1530]/80 to-[#070c1c]/90 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'border-white/10 hover:border-blue-500/25'
                }`}
              >
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1.5">
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                        {exp.role}
                      </h2>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-green-500/15 border border-green-500/30 text-green-300 shadow-[0_0_12px_rgba(34,197,94,0.3)]">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-blue-400 font-medium text-sm sm:text-base flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <FiBriefcase />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm">
                        <FiMapPin />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Dates badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-blue-300 text-xs sm:text-sm font-mono w-fit">
                    <FiCalendar className="text-blue-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed my-6 font-medium">
                  {exp.summary}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-2">
                    Key Contributions & Impact:
                  </h3>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3">
                      <FiCheckCircle className="text-blue-400 mt-1 shrink-0 text-base" />
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                    Technologies Applied:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/10 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Milestone Summary & CTA */}
        <div className="exp-page-card grid sm:grid-cols-2 gap-6">
          <SpotlightCard className="p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Download Official Resume
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                Get a copy of my complete professional curriculum vitae including detailed project references and employment credentials.
              </p>
            </div>
            <a
              href="/Vikas_Mern_Developer.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all w-full sm:w-fit"
            >
              <FiDownload />
              <span>Download PDF Resume</span>
            </a>
          </SpotlightCard>

          <SpotlightCard className="p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                Have an Opportunity?
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                I am open to discuss full-time roles, contracts, and freelance MERN stack web development projects.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-xs sm:text-sm hover:border-blue-400/40 transition-all w-full sm:w-fit"
            >
              <span>Get In Touch</span>
              <FiArrowRight />
            </Link>
          </SpotlightCard>
        </div>

      </div>
    </div>
  )
}

export default ExperiencePage
