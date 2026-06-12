import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Market Research & Strategy",
    description:
      "We study your market, audience, and competitors to build a data-backed game plan that sets the foundation for real impact.",
  },
  {
    num: "2",
    title: "Creative Execution",
    description:
      "Our team designs and deploys immersive brand experiences — events, activations, and campaigns tailored to your goals.",
  },
  {
    num: "3",
    title: "Results & Reporting",
    description:
      "Clear metrics, consumer insights, and ongoing optimisation ensure every experience delivers lasting, measurable value.",
  },
];

export function WhyUs() {
  const ref = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="why-us" ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">

          {/* ── Left: Heading block ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pt-4"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-5">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-foreground mb-6">
              We have the best team and the best process
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
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

          {/* ── Right: Animated S-curve timeline ───────────── */}
          <div className="relative h-[480px] md:h-[520px] select-none">

            {/* Ghost step numbers in background */}
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

            {/* SVG S-curve */}
            <svg
              viewBox="0 0 760 400"
              className="absolute inset-0 w-full h-full"
              aria-hidden
            >
              {/* Animated path */}
              <motion.path
                ref={ref}
                d="M 60 360 C 160 360 240 220 380 215 C 520 210 640 90 700 65"
                fill="none"
                stroke="#E30000"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />

              {/* Dot markers — appear sequentially */}
              {[
                { cx: 60,  cy: 360 },
                { cx: 380, cy: 215 },
                { cx: 700, cy: 65  },
              ].map((dot, i) => (
                <motion.circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="8"
                  fill="white"
                  stroke="#9ca3af"
                  strokeWidth="2.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.55, ease: "backOut" }}
                />
              ))}
            </svg>

            {/* Step text labels — positioned to match dots (SVG coords → % of container) */}
            {/* Dot 1: cx=60/760=7.9%, cy=360/400=90% → below → near bottom */}
            <motion.div
              className="absolute w-44"
              style={{ left: "2%", bottom: "2%" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h4 className="font-bold text-sm text-foreground mb-1">{steps[0].title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{steps[0].description}</p>
            </motion.div>

            {/* Dot 2: cx=380/760=50%, cy=215/400=53.8% → text below dot */}
            <motion.div
              className="absolute w-44"
              style={{ left: "46%", top: "55%" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h4 className="font-bold text-sm text-foreground mb-1">{steps[1].title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{steps[1].description}</p>
            </motion.div>

            {/* Dot 3: cx=700/760=92.1%, cy=65/400=16.3% → text below dot */}
            <motion.div
              className="absolute w-44"
              style={{ right: "0%", top: "18%" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <h4 className="font-bold text-sm text-foreground mb-1">{steps[2].title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{steps[2].description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
