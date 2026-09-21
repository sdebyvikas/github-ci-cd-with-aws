import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import { useLenis } from "../context/LenisProvider";
import { useMagnetic } from "../hooks/useMagnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StatItem = ({ endValue, suffix = "+", label }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const obj = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: endValue,
          duration: 2,
          ease: "power3.out",
          onUpdate: () => {
            if (el) el.innerText = Math.floor(obj.val) + suffix;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [endValue, suffix]);

  return (
    <div className="flex flex-col">
      <h3
        ref={countRef}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400"
      >
        0{suffix}
      </h3>
      <p className="text-gray-400 mt-2 text-xs sm:text-sm font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
};

const Hero = () => {
  const { scrollTo } = useLenis();
  const heroRef = useRef(null);
  const imageContainerRef = useRef(null);
  const btn1Ref = useMagnetic(0.2);
  const btn2Ref = useMagnetic(0.2);
  const btn3Ref = useMagnetic(0.2);

  // Staggered text & entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3 },
      )
        .fromTo(
          ".hero-greeting",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5",
        )
        .fromTo(
          ".hero-word",
          { opacity: 0, y: 40, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8, stagger: 0.15 },
          "-=0.4",
        )
        .fromTo(
          ".hero-role",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4",
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5",
        )
        .fromTo(
          ".hero-btn",
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
          "-=0.5",
        )
        .fromTo(
          ".hero-stats",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          "-=1.2",
        );

      // Profile image floating animation
      gsap.to(".hero-avatar", {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Profile Image Mouse Parallax
  useEffect(() => {
    const el = imageContainerRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.02;
      const y = (clientY - window.innerHeight / 2) * 0.02;

      gsap.to(el, {
        x: x,
        y: y,
        rotateX: -y * 0.5,
        rotateY: x * 0.5,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          {/* Current Company Badge */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span>
                Currently Working at{" "}
                <span className="font-semibold text-white ml-0.5">
                  Bizclock Infotech Pvt. Ltd.
                </span>
              </span>
            </div>
          </div>

          <p className="hero-greeting text-blue-400 font-mono text-sm sm:text-base tracking-wider uppercase mb-2">
            Hello, I'm
          </p>

          {/* Name with Word-by-Word Reveal */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.1] mb-3">
            <span className="hero-word inline-block mr-3">Vikas</span>
            {/* <span className="hero-word inline-block gradient-text">Kumar</span> */}
          </h1>

          <h2 className="hero-role text-xl sm:text-2xl md:text-3xl text-gray-300 font-semibold tracking-tight mt-3">
            MERN Stack Developer
          </h2>

          <p className="hero-desc text-gray-400 mt-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base">
            Results-driven MERN Stack Developer with expertise in React.js,
            Next.js, Redux, Node.js, Express.js, MongoDB, and scalable web
            applications.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-8">
            <div ref={btn1Ref} className="hero-btn w-full sm:w-auto">
              <Link
                to="/projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-sm shadow-[0_10px_25px_-5px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.6)] cursor-pointer group"
              >
                <span>View Projects</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div ref={btn2Ref} className="hero-btn w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 cursor-pointer group"
              >
                <FiMail className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <span>Contact Me</span>
              </Link>
            </div>

            <div ref={btn3Ref} className="hero-btn w-full sm:w-auto">
              <a
                href="/Vikas_Mern_Developer.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 cursor-pointer group"
              >
                <FiDownload className="text-purple-400 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Stats Section with GSAP Counters */}
          <div className="hero-stats grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
            <StatItem endValue={3} suffix="+" label="Years Exp." />
            <StatItem endValue={10} suffix="+" label="Projects" />
            <StatItem endValue={12} suffix="+" label="Technologies" />
          </div>
        </div>

        {/* Right Column: Profile Image with Floating Effect & Glowing Aura */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div
            ref={imageContainerRef}
            className="hero-avatar relative flex items-center justify-center"
            style={{ perspective: 1000 }}
          >
            {/* Glowing Aura Ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-purple-600/30 blur-[90px] rounded-full animate-glow-pulse"></div>

            {/* Orbiting Border Accent */}
            <div
              className="absolute inset-0 m-auto w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px] rounded-full border border-blue-500/20 animate-spin"
              style={{ animationDuration: "25s" }}
            ></div>

            {/* Profile Avatar Image */}
            <div className="relative z-10 p-2 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_50px_rgba(59,130,246,0.3)] group">
              <img
                src="/Image.png"
                alt="Vikas Kumar"
                className="w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full object-cover border-4 border-[#050816] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
