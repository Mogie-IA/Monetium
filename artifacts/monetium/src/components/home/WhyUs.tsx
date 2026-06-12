import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Market Research & Strategy",
    description:
      "We study your market, audience, and competitors to build a data-backed game plan that sets the foundation for real impact.",
  },
  {
    num: "02",
    title: "Creative Execution",
    description:
      "Our team designs and deploys immersive brand experiences — events, activations, and campaigns tailored to your goals.",
  },
  {
    num: "03",
    title: "Results & Reporting",
    description:
      "Clear metrics, consumer insights, and ongoing optimisation ensure every experience delivers lasting, measurable value.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        {/* ── Heading block ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-4"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-5">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground mb-6">
              We have the best team and the best process
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed text-sm md:text-base">
              From initial strategy to final execution, we partner with brands
              every step of the way — delivering bold, consumer-focused
              experiences that convert.
            </p>
            <a
              href="/#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors text-sm"
            >
              Get Started
            </a>
          </motion.div>

          {/* ── Desktop: animated S-curve timeline ─────────── */}
          <div className="relative h-[440px] lg:h-[480px] select-none hidden lg:block">
            {/* Ghost numbers */}
            {["1", "2", "3"].map((n, i) => (
              <span
                key={n}
                className="absolute font-black text-foreground/[0.05] leading-none pointer-events-none"
                style={{
                  fontSize: "clamp(120px, 18vw, 220px)",
                  left: i === 0 ? "2%" : i === 1 ? "34%" : "64%",
                  top:  i === 0 ? "38%" : i === 1 ? "14%" : "-8%",
                }}
              >
                {n}
              </span>
            ))}

            <svg viewBox="0 0 760 400" className="absolute inset-0 w-full h-full" aria-hidden>
              <motion.path
                d="M 60 360 C 160 360 240 220 380 215 C 520 210 640 90 700 65"
                fill="none"
                stroke="#E30000"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
              {[{ cx: 60, cy: 360 }, { cx: 380, cy: 215 }, { cx: 700, cy: 65 }].map((dot, i) => (
                <motion.circle
                  key={i} cx={dot.cx} cy={dot.cy} r="8"
                  fill="white" stroke="#9ca3af" strokeWidth="2.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.55, ease: "backOut" }}
                />
              ))}
            </svg>

            {[
              { style: { left: "2%", bottom: "2%" } },
              { style: { left: "46%", top: "55%" } },
              { style: { right: "0%", top: "18%" } },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-44"
                style={pos.style}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.3 }}
              >
                <h4 className="font-bold text-sm text-foreground mb-1">{steps[i].title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{steps[i].description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Mobile: vertical numbered steps ─────────────── */}
        <div className="lg:hidden flex flex-col gap-8 mt-2">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-5 items-start"
            >
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-xs font-black text-primary">{step.num}</span>
              </div>
              <div className="flex-1 pt-1.5">
                {i < steps.length - 1 && (
                  <div className="absolute mt-10 ml-[-30px] w-px h-8 bg-primary/20" />
                )}
                <h4 className="font-bold text-base text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
