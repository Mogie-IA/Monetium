import { motion } from "framer-motion";
import { SiCocacola, SiUnilever, SiSamsung } from "react-icons/si";

type BrandEntry =
  | { kind: "icon"; name: string; Icon: React.ComponentType<{ className?: string }> }
  | { kind: "text"; name: string; style?: string };

const brandList: BrandEntry[] = [
  { kind: "icon",  name: "Samsung",            Icon: SiSamsung  },
  { kind: "icon",  name: "Coca-Cola",         Icon: SiCocacola },
  { kind: "text",  name: "Coca-Cola Hellenic", style: "text-base font-bold tracking-tight" },
  { kind: "icon",  name: "Unilever",           Icon: SiUnilever },
  { kind: "text",  name: "Nivea",              style: "text-2xl font-black tracking-widest uppercase" },
  { kind: "text",  name: "Knorr",              style: "text-2xl font-extrabold italic" },
  { kind: "text",  name: "Royco",              style: "text-xl font-bold tracking-wide" },
  { kind: "text",  name: "Vaseline",           style: "text-lg font-light tracking-widest uppercase" },
  { kind: "text",  name: "Close Up",           style: "text-2xl font-black" },
  { kind: "text",  name: "Eucerin",            style: "text-lg font-medium tracking-widest uppercase" },
  { kind: "text",  name: "Morning Fresh",      style: "text-base font-semibold tracking-tight" },
  { kind: "text",  name: "Dano",               style: "text-2xl font-extrabold tracking-wide" },
  { kind: "text",  name: "SLB",                style: "text-xl font-bold tracking-widest uppercase" },
  { kind: "text",  name: "Flytime",            style: "text-xl font-black italic" },
  { kind: "text",  name: "Nigerian Breweries", style: "text-sm font-semibold tracking-wider uppercase" },
  { kind: "text",  name: "Guinness",           style: "text-xl font-black tracking-tight" },
  { kind: "text",  name: "MTN",                style: "text-2xl font-black tracking-widest" },
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
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            People we've worked with
          </h3>
          <p className="mt-3 text-muted-foreground text-base">Just to name a few.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {brandList.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="h-20 flex items-center justify-center border border-border rounded-xl px-4 bg-background hover:border-foreground/30 hover:shadow-sm transition-all duration-200 cursor-default"
            >
              {brand.kind === "icon" ? (
                <brand.Icon className="w-10 h-10 text-foreground/70 hover:text-foreground transition-colors" />
              ) : (
                <span
                  className={`text-center text-foreground/70 hover:text-foreground transition-colors leading-tight ${brand.style ?? "text-base font-semibold"}`}
                >
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
