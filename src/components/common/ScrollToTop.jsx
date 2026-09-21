import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from '../../context/LenisProvider'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const { scrollTo } = useLenis()

  useEffect(() => {
    // Scroll window to top
    window.scrollTo(0, 0)
    
    // Also scroll Lenis to top immediately
    if (scrollTo) {
      scrollTo(0, { immediate: true })
    }

    // Refresh GSAP ScrollTrigger after route transition
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timeout)
  }, [pathname, scrollTo])

  return null
}

export default ScrollToTop
