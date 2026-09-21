import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiStar, FiArrowUpRight, FiLayers, FiCheck } from 'react-icons/fi'
import SpotlightCard from '../components/common/SpotlightCard'
import gsap from 'gsap'

const allProjects = [
  {
    id: 1,
    title: 'AIM Software - Comviva (Tech Mahindra)',
    category: 'crm',
    categoryName: 'CRM / Enterprise',
    desc: 'Comprehensive lead management and customer handling software built for Comviva (Tech Mahindra). Features end-to-end customer workflow pipelines, team delegation, analytics dashboards, and enterprise-grade data security.',
    link: '#',
    featured: true,
    tags: ['MERN Stack', 'Node.js', 'Express.js', 'MongoDB', 'React', 'RBAC', 'Architecture'],
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Candico India (Next.js)',
    category: 'frontend',
    categoryName: 'Next.js / Frontend',
    desc: 'High-performance modern e-commerce confectionery website built with Next.js, responsive UI/UX, product catalogs, fast image loading, and SEO optimization.',
    link: 'https://www.candicoindia.in/',
    featured: true,
    tags: ['Next.js', 'React.js', 'E-Commerce', 'Tailwind CSS', 'SEO Optimization'],
    icon: '🛍️',
  },
  {
    id: 3,
    title: 'Nestfin',
    category: 'fullstack',
    categoryName: 'Full Stack MERN',
    desc: 'Property rental and finance management platform built using MERN stack with scalable backend REST APIs, tenant verification workflows, and secure JWT authentication.',
    link: 'https://nestfin.app/',
    featured: true,
    tags: ['MERN Stack', 'REST APIs', 'JWT Auth', 'MongoDB', 'Responsive UI'],
    icon: '🏢',
  },
  {
    id: 4,
    title: 'Nestfin Tenant Portal',
    category: 'fullstack',
    categoryName: 'Full Stack MERN',
    desc: 'Dedicated tenant portal for booking apartments, reviewing rent schedules, submitting maintenance requests, and managing lease agreements.',
    link: 'https://tenants.nestfin.app/home',
    featured: false,
    tags: ['React.js', 'Redux Toolkit', 'Booking Engine', 'Axios', 'REST API'],
    icon: '🔑',
  },
  {
    id: 5,
    title: 'Impulse Fitness & Health Tech',
    category: 'frontend',
    categoryName: 'Next.js / Frontend',
    desc: 'Modern fitness, health technology, and gym equipment website featuring engaging animations, interactive product showcases, and responsive design.',
    link: 'https://www.impulsehealthtech.com/',
    featured: false,
    tags: ['Full Stack', 'UI/UX', 'HealthTech', 'JavaScript', 'CSS3'],
    icon: '💪',
  },
  {
    id: 6,
    title: 'Blue Planet CRM',
    category: 'crm',
    categoryName: 'CRM / Enterprise',
    desc: 'Full-fledged MERN stack educational CRM with distinct portals for Super Admin, Teachers, and Candidates, paired with complete LSM service integration.',
    link: 'http://crm.bizclockinfotech.com/',
    featured: false,
    tags: ['CRM', 'MERN Stack', 'Role-Based Access', 'Express.js', 'MongoDB'],
    icon: '🌐',
  },
  {
    id: 7,
    title: 'HRMS Employee Portal',
    category: 'crm',
    categoryName: 'CRM / Enterprise',
    desc: 'Complete Human Resource Management System (HRMS) portal handling employee records, leave approvals, payroll summaries, and attendance monitoring.',
    link: '#',
    featured: false,
    tags: ['HRMS', 'Authentication', 'Admin Dashboard', 'Node.js', 'MongoDB'],
    icon: '👥',
  },
  {
    id: 8,
    title: 'LMS - Learning Management System',
    category: 'education',
    categoryName: 'Education / Web',
    desc: 'Dynamic Learning Management System supporting course catalogs, video streaming modules, quiz submissions, and teacher grading dashboards.',
    link: '#',
    featured: false,
    tags: ['LMS', 'Node.js', 'Express.js', 'React.js', 'MongoDB'],
    icon: '📚',
  },
  {
    id: 9,
    title: 'Psychology Master Class',
    category: 'education',
    categoryName: 'Education / Web',
    desc: 'Educational coaching platform designed for competitive exam aspirants, psychology courses, and online student enrollments.',
    link: 'https://psychologymasterclass.in/',
    featured: false,
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    icon: '🧠',
  },
  {
    id: 10,
    title: 'Neelkanth Education Coaching',
    category: 'education',
    categoryName: 'Education / Web',
    desc: 'Academic institute portal providing course details, batch schedules, admission inquiries, and student testimonials.',
    link: 'https://neelkantheducation.com/',
    featured: false,
    tags: ['Education', 'CMS', 'WordPress', 'SEO'],
    icon: '🎓',
  },
  {
    id: 11,
    title: 'Network Net India Institute',
    category: 'education',
    categoryName: 'Education / Web',
    desc: 'Computer education & certification institute portal engineered with custom layouts, responsive tables, and registration forms.',
    link: 'https://networknetindia.com/',
    featured: false,
    tags: ['Bootstrap', 'UI Design', 'HTML5', 'CSS3'],
    icon: '💻',
  },
  {
    id: 12,
    title: 'Yoga Universe Wellness',
    category: 'frontend',
    categoryName: 'Next.js / Frontend',
    desc: 'Holistic wellness and yoga education web application built to inspire healthy lifestyle habits and mindful meditation practices.',
    link: 'https://yogawebdev.netlify.app/',
    featured: false,
    tags: ['Responsive Web', 'Netlify', 'UI/UX', 'CSS Animations'],
    icon: '🧘',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack MERN' },
  { id: 'frontend', label: 'Next.js / Frontend' },
  { id: 'crm', label: 'CRM & Enterprise' },
  { id: 'education', label: 'Education & Web' },
]

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-page-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      gsap.fromTo(
        '.projects-page-card',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.1 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [selectedCategory, searchQuery])

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Page Header */}
        <div className="projects-page-header text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// PORTFOLIO & WORK SHOWCASE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading gradient-text">
            My Projects
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            A curated showcase of 12+ real-world web applications, SaaS platforms,
            CRM solutions, and enterprise software engineered with MERN stack & Next.js.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="projects-page-header space-y-6">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name or technology..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-blue-500 focus:bg-blue-500/[0.03] outline-none transition-all duration-300 shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/[0.04] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Count notification */}
        <div className="text-center text-xs font-mono text-gray-400">
          Showing <span className="text-blue-400 font-semibold">{filteredProjects.length}</span> projects
        </div>

        {/* Projects 3-Column Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projects-page-card h-full">
              <SpotlightCard
                className={`p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 ${
                  project.featured
                    ? 'border-blue-500/30 bg-gradient-to-b from-[#0b1329]/80 to-[#070b18]/90 shadow-[0_0_30px_rgba(59,130,246,0.12)]'
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                <div>
                  {/* Top Bar: Icon, Category & Featured */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 shadow-inner">
                      {project.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300">
                        {project.categoryName}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300">
                          <FiStar className="text-blue-400" />
                          FEATURED
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>
                </div>

                {/* Bottom Tags & Action */}
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-white/[0.03] border border-white/5 text-gray-400 group-hover:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo CTA */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      project.link === '#'
                        ? 'bg-white/[0.04] text-gray-400 border border-white/10 hover:bg-white/[0.08] hover:text-white cursor-pointer'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.5)]'
                    }`}
                  >
                    <span>{project.link === '#' ? 'Enterprise Internal Platform' : 'Live Demo'}</span>
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* No Results Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl p-8 max-w-lg mx-auto">
            <p className="text-gray-300 font-semibold mb-2">No projects found</p>
            <p className="text-gray-400 text-xs mb-4">
              Try adjusting your search keywords or choosing "All Projects"
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
              }}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Custom Project CTA */}
        <div className="projects-page-header rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 border border-blue-500/20 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-2">
            Have a custom web project in mind?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            I can help design, build, and deploy high-speed web apps tailored specifically to your business requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all"
          >
            <span>Start a Conversation</span>
            <FiArrowUpRight />
          </Link>
        </div>

      </div>
    </div>
  )
}

export default ProjectsPage
