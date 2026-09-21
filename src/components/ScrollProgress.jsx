import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollProgress = () => {
  const barRef = useRef(null)
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const p = Math.round(self.progress * 100)
          setProgressPercent(p)
          if (barRef.current) {
            gsap.to(barRef.current, {
              scaleY: self.progress,
              duration: 0.1,
              ease: 'none',
              overwrite: 'auto',
            })
          }
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-40 hidden sm:flex flex-col items-center gap-2 pointer-events-none">
      {/* Percentage Pill */}
      <span className="text-[10px] font-mono text-blue-400 bg-[#0b1120]/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-blue-500/20 shadow-lg">
        {progressPercent}%
      </span>

      {/* Vertical Track */}
      <div className="w-1 h-32 sm:h-40 bg-white/10 rounded-full overflow-hidden p-[1px] relative backdrop-blur-sm border border-white/5">
        <div
          ref={barRef}
          className="w-full h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full origin-top scale-y-0 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
        ></div>
      </div>
    </div>
  )
}

export default ScrollProgress
