import { motion } from "framer-motion";
import { services } from "@/data/services";

export function Services() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  const Card = ({ service }: { service: typeof services[0] }) => (
    <motion.div
      variants={itemVariants}
      className="bg-background border border-border/60 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow duration-300"
    >
      <div className="w-11 h-11 bg-foreground flex items-center justify-center rounded-xl mb-8 shrink-0">
        <service.icon className="w-5 h-5 text-background" />
      </div>
      <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
    </motion.div>
  );

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
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">Our Core Expertise</h3>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
        >
          {topRow.map((service) => (
            <Card key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Bottom row: 2 cards, centered to align with the grid above */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {bottomRow.map((service, i) => (
            <div key={service.id} className={i === 0 ? "md:col-start-1" : "md:col-start-2"}>
              <Card service={service} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
