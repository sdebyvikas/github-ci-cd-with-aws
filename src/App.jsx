import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LenisProvider } from './context/LenisProvider'
import ScrollToTop from './components/common/ScrollToTop'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import BackgroundEffects from './components/BackgroundEffects'
import Navbar from './components/Navbar'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'

// Page Routes
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <LenisProvider>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Scroll restoration helper */}
      <ScrollToTop />

      <div className="relative min-h-screen bg-[#050816] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden flex flex-col justify-between">
        {/* Ambient floating glows & grid */}
        <BackgroundEffects />

        {/* Custom interactive cursor */}
        <CustomCursor />

        {/* Vertical Top-Right scroll progress */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Floating Quick Action CTA Buttons */}
        <FloatingButtons />

        {/* Footer */}
        <Footer />
      </div>
    </LenisProvider>
  )
}

export default App