import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-8">
              We help brands move from being seen to being remembered.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              We are an integrated marketing communications agency that specializes in disruptive, consumer-focused experiences. From strategy to execution, our team delivers innovative campaigns across Nigeria that challenge convention, build meaningful brand partnerships, and engage consumers in ways that create lasting bonds.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <div className="absolute inset-0 border border-primary/20 z-10 translate-x-4 translate-y-4"></div>
              <img
                src="/images/about.png"
                alt="Behind the scenes event production"
                className="w-full h-full object-cover relative z-20 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
