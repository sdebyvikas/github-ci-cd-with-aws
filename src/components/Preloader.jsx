import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const barRef = useRef(null)
  const percentRef = useRef(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        },
      })

      // Animate counter
      const counterObj = { val: 0 }
      tl.to(counterObj, {
        val: 100,
        duration: 1.1,
        ease: 'power2.inOut',
        onUpdate: () => {
          setPercent(Math.floor(counterObj.val))
        },
      })

      // Animate progress bar
      tl.to(
        barRef.current,
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power2.inOut',
        },
        0
      )

      // Text glow & reveal
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        0
      )

      // Curtain slide-up reveal
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: 'expo.inOut',
        delay: 0.1,
      })
    })

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050816] text-white"
    >
      <div className="flex flex-col items-center gap-4 max-w-xs w-full px-6">
        <div ref={textRef} className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            PORTFOLIO 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading">
            Vikas <span className="gradient-text">Kumar</span>
          </h1>
          <p className="text-xs text-gray-400 font-mono mt-1">MERN Stack Developer</p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4 relative">
          <div
            ref={barRef}
            className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left scale-x-0 rounded-full"
          ></div>
        </div>

        {/* Percentage Counter */}
        <div className="w-full flex justify-between items-center text-xs font-mono text-gray-400">
          <span>Loading Experience</span>
          <span ref={percentRef} className="text-blue-400 font-semibold">{percent}%</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader
