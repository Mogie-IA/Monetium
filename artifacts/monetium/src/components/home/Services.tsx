import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-medium text-foreground bg-background border border-border px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
            What We Do
          </span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our Core Expertise
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-background border border-border/60 rounded-2xl p-8 flex flex-col gap-0 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon container — solid dark fill */}
              <div className="w-11 h-11 bg-foreground flex items-center justify-center rounded-xl mb-8 shrink-0">
                <service.icon className="w-5 h-5 text-background" />
              </div>

              <h4 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
