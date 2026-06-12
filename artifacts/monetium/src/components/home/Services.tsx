import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our Core Expertise
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group bg-background border border-border p-10 hover:border-primary/50 transition-all duration-500 relative overflow-hidden ${
                index === 3 ? "lg:col-span-1 lg:col-start-1" : ""
              } ${index === 4 ? "lg:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-card border border-border flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-xl font-serif font-bold text-foreground mb-4">
                  {service.title}
                </h4>
                
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
