import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* About Overview */}
      <div className="relative">
        <About />
        <div className="text-center pb-8 -mt-6 relative z-20">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <span>Learn More About Vikas Kumar</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Skills Showcase */}
      <div className="relative">
        <Skills />
        <div className="text-center pb-8 -mt-6 relative z-20">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <span>Explore All Skills & Tech Stack</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        <Experience />
        <div className="text-center pb-8 -mt-6 relative z-20">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <span>View Full Career Experience</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="relative">
        <Projects />
        <div className="text-center pb-8 -mt-6 relative z-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            <span>Browse All 12+ Projects</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Home;
