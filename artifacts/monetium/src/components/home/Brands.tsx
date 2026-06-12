import { motion } from "framer-motion";

const brandNames = [
  "Coca-Cola",
  "Coca-Cola Hellenic",
  "Unilever",
  "Nivea",
  "Knorr",
  "Royco",
  "Vaseline",
  "Close Up",
  "Eucerin",
  "Morning Fresh",
  "Dano",
  "SLB",
  "Flytime",
  "Pepsi",
  "Nestlé",
  "Nigerian Breweries",
  "Guinness",
  "MTN",
  "Airtel",
  "GTBank",
];

export function Brands() {
  return (
    <section id="brands" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            People we've worked with
          </h3>
          <p className="mt-3 text-muted-foreground text-base">Just to name a few.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-8"
        >
          {brandNames.map((name, index) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`text-foreground/70 hover:text-foreground transition-colors cursor-default select-none ${
                index % 5 === 0
                  ? "text-2xl font-light tracking-tight"
                  : index % 5 === 1
                  ? "text-xl font-bold uppercase tracking-wider"
                  : index % 5 === 2
                  ? "text-lg font-medium italic"
                  : index % 5 === 3
                  ? "text-xl font-extrabold tracking-tight"
                  : "text-lg font-light tracking-widest uppercase"
              }`}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
