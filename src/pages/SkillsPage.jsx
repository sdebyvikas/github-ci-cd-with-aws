import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle, FiCpu, FiServer, FiDatabase, FiTool } from 'react-icons/fi'
import SpotlightCard from '../components/common/SpotlightCard'
import gsap from 'gsap'

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: <FiCpu className="text-blue-400 text-2xl" />,
    desc: 'Building highly interactive, responsive, and performant user interfaces.',
    skills: [
      { name: 'React.js', level: 95, tag: 'Primary Framework', exp: '3+ Years' },
      { name: 'Next.js', level: 90, tag: 'SSR & SSG', exp: '2+ Years' },
      { name: 'JavaScript (ES6+)', level: 92, tag: 'Core Language', exp: '3+ Years' },
      { name: 'Redux / Redux Toolkit', level: 88, tag: 'State Management', exp: '2+ Years' },
      { name: 'Tailwind CSS', level: 95, tag: 'Modern Styling', exp: '2+ Years' },
      { name: 'HTML5 & Semantic Web', level: 98, tag: 'Structure & SEO', exp: '3+ Years' },
      { name: 'CSS3 / Animations', level: 92, tag: 'Responsive Design', exp: '3+ Years' },
      { name: 'Bootstrap', level: 90, tag: 'UI Framework', exp: '3+ Years' },
      { name: 'GSAP & Motion Animation', level: 85, tag: 'Micro-Interactions', exp: '1+ Years' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: <FiServer className="text-purple-400 text-2xl" />,
    desc: 'Developing scalable REST APIs, authentication pipelines, and server logic.',
    skills: [
      { name: 'Node.js', level: 90, tag: 'Runtime Environment', exp: '3+ Years' },
      { name: 'Express.js', level: 92, tag: 'Web Framework', exp: '3+ Years' },
      { name: 'RESTful API Architecture', level: 95, tag: 'Endpoint Design', exp: '3+ Years' },
      { name: 'JWT Authentication', level: 92, tag: 'Token & Auth Security', exp: '2+ Years' },
      { name: 'Role-Based Access Control (RBAC)', level: 88, tag: 'Permissions & Security', exp: '2+ Years' },
      { name: 'Middleware Architecture', level: 90, tag: 'Custom Handlers', exp: '2+ Years' },
      { name: 'Laravel Basics', level: 75, tag: 'PHP Framework', exp: '1 Year' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    icon: <FiDatabase className="text-emerald-400 text-2xl" />,
    desc: 'Designing efficient database schemas, query optimizations, and data persistence.',
    skills: [
      { name: 'MongoDB', level: 92, tag: 'NoSQL Database', exp: '3+ Years' },
      { name: 'Mongoose ODM', level: 90, tag: 'Schema & Validation', exp: '3+ Years' },
      { name: 'MySQL', level: 85, tag: 'Relational Database', exp: '2+ Years' },
      { name: 'Data Aggregation & Indexing', level: 82, tag: 'Performance Queries', exp: '2+ Years' },
    ],
  },
  {
    id: 'tools',
    title: 'DevOps & Workflow Tools',
    icon: <FiTool className="text-amber-400 text-2xl" />,
    desc: 'Tools and workflows used for development, debugging, and deployment.',
    skills: [
      { name: 'Git & GitHub', level: 92, tag: 'Version Control', exp: '3+ Years' },
      { name: 'Postman', level: 95, tag: 'API Testing & Docs', exp: '3+ Years' },
      { name: 'Vite & Webpack', level: 90, tag: 'Build Tools', exp: '2+ Years' },
      { name: 'Vercel & Netlify', level: 92, tag: 'Deployment & CI/CD', exp: '2+ Years' },
      { name: 'VS Code & DevTools', level: 95, tag: 'Environment', exp: '3+ Years' },
      { name: 'npm & Package Managers', level: 92, tag: 'Dependency Mgmt', exp: '3+ Years' },
    ],
  },
]

const SkillsPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-anim-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.skills-anim-card',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeTab])

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab)

  return (
    <div ref={sectionRef} className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="skills-anim-header text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// TECHNICAL PROFICIENCY & ARSENAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading gradient-text">
            Skills & Technologies
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            A comprehensive overview of my technical stack, engineering practices,
            and specialized domain proficiencies.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/[0.04] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skills-anim-card space-y-6">
              {/* Category Title & Icon */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">{cat.title}</h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{cat.desc}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
                  {cat.skills.length} Technologies
                </div>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.skills.map((skill, sIdx) => (
                  <SpotlightCard
                    key={sIdx}
                    className="p-5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-gray-400 block mt-0.5">
                          {skill.tag}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-blue-500/15 border border-blue-500/30 text-blue-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 pt-1 border-t border-white/5">
                      <span>Experience:</span>
                      <span className="text-gray-200 font-medium">{skill.exp}</span>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & Engineering Standards Section */}
        <div className="skills-anim-card">
          <SpotlightCard className="p-8 sm:p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold font-heading text-white mb-6">
              Architecture & Development Principles
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm">
                  <FiCheckCircle />
                  <span>Modular Component Design</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Building reusable, single-responsibility components with clean state management and clean prop interfaces.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <FiCheckCircle />
                  <span>Secure Authentication & RBAC</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Implementing JWT-based auth tokens, encrypted cookies, protected router guards, and role-based permissions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <FiCheckCircle />
                  <span>Optimized RESTful Endpoints</span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Standardized JSON responses, error handling middlewares, pagination, indexing, and input validation schemas.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Call To Action */}
        <div className="skills-anim-card text-center pt-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-105"
          >
            <span>See These Skills in Action (Browse Projects)</span>
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default SkillsPage
