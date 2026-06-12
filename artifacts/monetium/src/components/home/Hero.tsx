import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Brand Activation Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6"
          >
            We Create <span className="text-primary italic">Experiences</span> That Connect Brands with People.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl font-light"
          >
            Immersive activations, unforgettable moments, lasting impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Let's Build Your Next Experience
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground/30 text-foreground text-lg font-medium hover:bg-foreground/10 hover:border-foreground/50 transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
