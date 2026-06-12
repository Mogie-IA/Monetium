import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="bg-white overflow-hidden" style={{ height: "calc(100dvh - 4rem)" }}>

      {/* ── DESKTOP bento grid (md+) ──────────────────────────── */}
      <div className="hidden md:grid grid-cols-[5fr_7fr] grid-rows-[3fr_2fr] gap-3 h-full p-3">

        {/* Card 1: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-stone-100 rounded-2xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-foreground/40 tracking-widest uppercase">
                Integrated Marketing
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-foreground/30" strokeWidth={2.5} />
            </div>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-black uppercase leading-[1.05] tracking-tight text-foreground">
              WE CREATE<br />
              <span className="text-primary">EXPERIENCES</span><br />
              THAT CONNECT<br />
              BRANDS WITH<br />
              PEOPLE.
            </h1>
          </div>
          <p className="text-sm md:text-base text-foreground/55 leading-relaxed max-w-xs">
            Disruptive, consumer-focused experiences that build meaningful brand partnerships across Nigeria.
          </p>
        </motion.div>

        {/* Card 2: Tall image (spans both rows) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="row-span-2 relative overflow-hidden rounded-2xl"
        >
          <img src="/images/hero.png" alt="Brand Activation Event"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={() => scrollTo("contact")}
            className="absolute top-1/2 right-10 -translate-y-1/2 w-20 h-20 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white text-[10px] font-bold tracking-wider uppercase text-center leading-snug hover:bg-white/35 transition-colors cursor-pointer"
          >
            START<br />A PROJECT
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-6 left-6 flex gap-3"
          >
            <button onClick={() => scrollTo("portfolio")}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-semibold rounded-full hover:bg-white/30 transition-colors">
              View Our Work <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-semibold rounded-full hover:bg-primary/90 transition-colors">
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Cards 3 & 4: Bottom-left image tiles */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img src="/images/portfolio-cch.png" alt="Brand Experience"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45 rounded-2xl" />
            <span className="absolute bottom-3 left-3 text-white text-[10px] font-black tracking-widest uppercase">
              #EXPERIENCE
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img src="/images/portfolio-flytime.png" alt="Live Event Activation"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45 rounded-2xl" />
            <span className="absolute bottom-3 left-3 text-white text-[10px] font-black tracking-widest uppercase">
              #ACTIVATION
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE stacked layout (< md) ─────────────────────── */}
      <div className="md:hidden flex flex-col gap-2 h-full p-2">

        {/* Text card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-stone-100 rounded-2xl px-6 py-5 flex flex-col justify-between shrink-0"
        >
          <p className="text-[10px] font-semibold text-foreground/40 tracking-widest uppercase mb-3">
            Integrated Marketing
          </p>
          <h1 className="text-2xl font-black uppercase leading-tight tracking-tight text-foreground mb-3">
            WE CREATE <span className="text-primary">EXPERIENCES</span> THAT CONNECT BRANDS WITH PEOPLE.
          </h1>
          <p className="text-xs text-foreground/55 leading-relaxed">
            Disruptive, consumer-focused experiences that build meaningful brand partnerships across Nigeria.
          </p>
        </motion.div>

        {/* Tall hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl flex-1 min-h-0"
        >
          <img src="/images/hero.png" alt="Brand Activation Event"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <button onClick={() => scrollTo("portfolio")}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-semibold rounded-full">
              View Work <ArrowDown className="w-3 h-3" />
            </button>
            <button onClick={() => scrollTo("contact")}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-primary text-white text-xs font-semibold rounded-full">
              Contact Us <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>

        {/* Two small tiles */}
        <div className="grid grid-cols-2 gap-2 shrink-0 h-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img src="/images/portfolio-cch.png" alt="Experience"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
            <span className="absolute bottom-2 left-2 text-white text-[8px] font-black tracking-widest uppercase">
              #EXPERIENCE
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img src="/images/portfolio-flytime.png" alt="Activation"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
            <span className="absolute bottom-2 left-2 text-white text-[8px] font-black tracking-widest uppercase">
              #ACTIVATION
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
