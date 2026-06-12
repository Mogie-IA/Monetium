import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-[5fr_7fr] overflow-hidden">

      {/* ── LEFT PANEL ─────────────────────────────── */}
      <div className="relative bg-stone-100 flex flex-col justify-between px-8 md:px-12 pt-32 pb-8 lg:pt-36 lg:pb-10 min-h-[60vh] lg:min-h-screen">

        {/* Main headline */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="text-sm font-semibold text-foreground/50 tracking-widest uppercase">
              Integrated Marketing
            </span>
            <ArrowRight className="w-4 h-4 text-foreground/40" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-black uppercase leading-[1.05] tracking-tight text-foreground"
          >
            WE CREATE<br />
            <span className="text-primary">EXPERIENCES</span><br />
            THAT CONNECT<br />
            BRANDS WITH<br />
            PEOPLE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-6 text-sm md:text-base text-foreground/60 max-w-xs leading-relaxed"
          >
            Disruptive, consumer-focused experiences that build
            meaningful brand partnerships and lasting bonds.
          </motion.p>
        </div>

        {/* Bottom: two thumbnail tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="grid grid-cols-2 gap-3 mt-10 lg:mt-0"
        >
          <div className="relative h-36 md:h-44 overflow-hidden rounded-2xl">
            <img
              src="/images/portfolio-cch.png"
              alt="Brand Activation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-widest uppercase">
              #EXPERIENCE
            </span>
          </div>
          <div className="relative h-36 md:h-44 overflow-hidden rounded-2xl">
            <img
              src="/images/portfolio-flytime.png"
              alt="Live Event"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            <span className="absolute bottom-3 left-3 text-white text-xs font-bold tracking-widest uppercase">
              #ACTIVATION
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL ────────────────────────────── */}
      <div className="relative hidden lg:flex flex-col min-h-screen overflow-hidden">
        {/* Full-height image */}
        <img
          src="/images/hero.png"
          alt="Brand Activation Event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Circular CTA floating in centre-right */}
        <motion.a
          href="/#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="absolute top-1/2 right-16 -translate-y-1/2 w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white text-xs font-bold tracking-wider uppercase text-center leading-tight hover:bg-white/30 transition-colors z-10"
        >
          Start<br />a Project
        </motion.a>

        {/* Bottom CTA pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-10 left-8 right-8 flex gap-3 z-10"
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold rounded-full hover:bg-white/25 transition-colors"
          >
            <span>View Our Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Mobile: full-bg image fallback */}
      <div className="relative lg:hidden h-64 overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Brand Activation Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-5 left-5 right-5 flex gap-3">
          <a
            href="#contact"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-full"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-sm font-semibold rounded-full"
          >
            View Work <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>

    </section>
  );
}
