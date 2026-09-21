import { useEffect, useRef } from 'react'
import { FiExternalLink, FiFolder, FiStar, FiArrowUpRight } from 'react-icons/fi'
import SpotlightCard from './common/SpotlightCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const projects = [
  {
    title: 'AIM Software - Comviva (Tech Mahindra)',
    desc: 'Lead management and customer handling software developed for managing Comviva (Tech Mahindra) customer workflows, operations, and business processes. Led the complete project architecture and development.',
    link: '#',
    featured: true,
    tags: ['MERN Stack', 'Architecture', 'Enterprise'],
    icon: '⚡',
  },
  {
    title: 'Candico India (Next.js)',
    desc: 'Modern e-commerce website with responsive UI, API integration, and optimized frontend performance using Next.js.',
    link: 'https://www.candicoindia.in/',
    featured: true,
    tags: ['Next.js', 'React', 'E-Commerce'],
    icon: '🛍️',
  },
  {
    title: 'Nestfin',
    desc: 'Property rental management platform built using MERN stack with scalable APIs and authentication workflows.',
    link: 'https://nestfin.app/',
    featured: true,
    tags: ['MERN Stack', 'REST APIs', 'Auth'],
    icon: '🏢',
  },
  {
    title: 'Nestfin Tenant',
    desc: 'Tenant management application for booking, property management, and tenant workflows.',
    link: 'https://tenants.nestfin.app/home',
    featured: false,
    tags: ['React.js', 'Redux', 'Booking'],
    icon: '🔑',
  },
  {
    title: 'Impulse Fitness',
    desc: 'Fitness and health technology website with backend integration and responsive UI.',
    link: 'https://www.impulsehealthtech.com/',
    featured: false,
    tags: ['Full Stack', 'UI/UX', 'HealthTech'],
    icon: '💪',
  },
  {
    title: 'Blue Planet CRM',
    desc: 'Full MERN stack CRM platform with Admin, Teacher, and Candidate login systems along with complete LSM services integration.',
    link: 'http://crm.bizclockinfotech.com/',
    featured: false,
    tags: ['CRM', 'MERN Stack', 'RBAC'],
    icon: '🌐',
  },
  {
    title: 'HRMS Portal',
    desc: 'Complete HRMS portal for managing employees, HR workflows, authentication, and administration systems using MERN stack.',
    link: '#',
    featured: false,
    tags: ['HRMS', 'Authentication', 'Admin'],
    icon: '👥',
  },
  {
    title: 'LMS Project',
    desc: 'Learning Management System developed using MERN stack with Admin, Teacher, and Candidate modules.',
    link: '#',
    featured: false,
    tags: ['LMS', 'Node.js', 'Express.js'],
    icon: '📚',
  },
  {
    title: 'Psychology Master Class',
    desc: 'Educational institute website developed using HTML, CSS, and JavaScript for competitive exam coaching and online learning.',
    link: 'https://psychologymasterclass.in/',
    featured: false,
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    icon: '🧠',
  },
  {
    title: 'Neelkanth Education',
    desc: 'Educational coaching institute website developed and managed using WordPress platform.',
    link: 'https://neelkantheducation.com/',
    featured: false,
    tags: ['Education', 'CMS', 'WordPress'],
    icon: '🎓',
  },
  {
    title: 'Network Net India',
    desc: 'Computer education institute website developed using HTML, CSS, JavaScript, and Bootstrap.',
    link: 'https://networknetindia.com/',
    featured: false,
    tags: ['Bootstrap', 'UI Design', 'Web'],
    icon: '💻',
  },
  {
    title: 'Yoga Universe',
    desc: 'Yoga and wellness platform promoting healthy lifestyle, yoga education, and holistic wellness.',
    link: 'https://yogawebdev.netlify.app/',
    featured: false,
    tags: ['Responsive Web', 'Netlify', 'UI'],
    icon: '🧘',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.projects-header',
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

      // Projects staggered reveal
      gsap.fromTo(
        '.project-card-wrapper',
        { opacity: 0, y: 40, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="projects-header text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span>// PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Some of my featured projects focused on scalable architecture,
            responsive UI, and modern web development.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="projects-grid grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card-wrapper h-full">
              <SpotlightCard
                className={`p-6 sm:p-7 rounded-3xl h-full flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 ${
                  project.featured
                    ? 'border-blue-500/30 bg-gradient-to-b from-[#0b1329]/80 to-[#070b18]/90 shadow-[0_0_30px_rgba(59,130,246,0.12)]'
                    : 'border-white/10 hover:border-blue-500/30'
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Badges */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300 shadow-inner">
                      {project.icon}
                    </div>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <FiStar className="text-blue-400" />
                        FEATURED
                      </span>
                    )}
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
                    <span>{project.link === '#' ? 'Enterprise Internal App' : 'Live Demo'}</span>
                    <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects