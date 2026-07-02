import { motion, type Variants } from "framer-motion";
import { services } from "@/data/services";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Card = ({ service }: { service: typeof services[0] }) => (
  <motion.div
    variants={itemVariants}
    className="bg-background border border-border/60 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow duration-300 min-h-[240px]"
  >
    <div className="w-11 h-11 bg-foreground flex items-center justify-center rounded-xl mb-8 shrink-0">
      <service.icon className="w-5 h-5 text-background" />
    </div>
    <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
  </motion.div>
);

export function Services() {
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

        {/* Single unified grid — all 5 cards, equal column widths on every row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <Card key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
