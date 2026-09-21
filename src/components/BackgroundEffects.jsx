import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const BackgroundEffects = () => {
  const glow1Ref = useRef(null)
  const glow2Ref = useRef(null)
  const glow3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle ambient drift for glow 1 (top-left blue)
      gsap.to(glow1Ref.current, {
        x: '+=60',
        y: '+=40',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Ambient drift for glow 2 (center-right purple/indigo)
      gsap.to(glow2Ref.current, {
        x: '-=50',
        y: '+=60',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      })

      // Ambient drift for glow 3 (bottom-center cyan)
      gsap.to(glow3Ref.current, {
        x: '+=40',
        y: '-=50',
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background Mesh Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Radial Glow 1 - Top Left Blue */}
      <div
        ref={glow1Ref}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px]"
      />

      {/* Ambient Radial Glow 2 - Middle Right Purple/Indigo */}
      <div
        ref={glow2Ref}
        className="absolute top-[35%] -right-40 w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[150px]"
      />

      {/* Ambient Radial Glow 3 - Bottom Left Cyan */}
      <div
        ref={glow3Ref}
        className="absolute bottom-10 left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]"
      />
    </div>
  )
}

export default BackgroundEffects
