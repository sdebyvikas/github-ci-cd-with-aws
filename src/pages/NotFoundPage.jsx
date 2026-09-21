import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft, FiCompass } from 'react-icons/fi'
import SpotlightCard from '../components/common/SpotlightCard'

const NotFoundPage = () => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 pt-28 pb-20 relative z-10">
      <div className="max-w-xl w-full text-center">
        <SpotlightCard className="p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl pointer-events-none" />

          {/* 404 Glow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs text-red-400 font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span>ERROR 404 • ROUTE NOT FOUND</span>
          </div>

          <h1 className="text-7xl sm:text-9xl font-black font-heading gradient-text tracking-tighter mb-4">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
            Lost in Cyberspace?
          </h2>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-8 max-w-md mx-auto">
            The page or route you are looking for doesn't exist, was renamed, or has traveled to another dimension.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-500/25 transition-all"
            >
              <FiHome />
              <span>Return Home</span>
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <FiCompass />
              <span>Explore Projects</span>
            </Link>
          </div>
        </SpotlightCard>
      </div>
    </div>
  )
}

export default NotFoundPage
