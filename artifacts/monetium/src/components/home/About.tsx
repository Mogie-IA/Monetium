import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Cinematic image block with overlay heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ height: "clamp(280px, 42vw, 560px)" }}
        >
          <img
            src="/images/about.png"
            alt="Behind the scenes event production"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight">
              About Us
            </h2>
          </div>
        </motion.div>

        {/* Content beneath the image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-14 max-w-3xl"
        >
          <span className="inline-block text-xs font-medium text-foreground bg-muted border border-border px-3 py-1 rounded-full mb-8 tracking-wide uppercase">
            Who We Are
          </span>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
            We help brands move from being{" "}
            <span className="text-primary">seen</span> to being{" "}
            <span className="text-primary">remembered.</span>
          </p>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-light max-w-2xl">
            We are an integrated marketing communications agency that specialises in disruptive, consumer-focused experiences. From strategy to execution, our team delivers innovative campaigns across Nigeria that challenge convention, build meaningful brand partnerships, and engage consumers in ways that create lasting bonds.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
