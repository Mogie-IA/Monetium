import { motion } from "framer-motion";

const stats = [
  { value: "5,000+", label: "Attendees", sub: "Unilever Sales Conference" },
  { value: "3×", label: "Consecutive Years", sub: "Coke Studio activation" },
];

const images = [
  { src: "/images/portfolio-flytime.png", alt: "Flytime Live Experience" },
  { src: "/images/portfolio-unilever.png", alt: "Unilever Sales Conference" },
  { src: "/images/portfolio-cch.png", alt: "CCH Council of Chiefs" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-medium text-foreground bg-background border border-border px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
            Our Work
          </span>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Portfolio Highlights
          </h3>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 grid-rows-[280px_280px] gap-4"
        >
          {/* Top-left: dark stat tile (wide) */}
          <div className="col-span-1 row-span-1 bg-foreground rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-4xl font-bold text-background leading-none">
                {stats[0].value}
              </p>
              <p className="text-background/60 text-sm mt-2">{stats[0].sub}</p>
            </div>
            <p className="text-background/80 text-lg font-medium">{stats[0].label}</p>
          </div>

          {/* Top-right image spanning 2 rows (tall) */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Top far-right: image tile */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl hidden md:block">
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom-left image spanning 2 rows (tall) — only on md+ */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl hidden md:block">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Bottom-right two stat tiles */}
          <div className="col-span-1 row-span-1 grid grid-cols-2 gap-4 hidden md:grid">
            {/* Stat 2 */}
            <div className="bg-background border border-border rounded-2xl p-5 flex flex-col justify-between">
              <p className="text-3xl font-bold text-foreground leading-none">{stats[1].value}</p>
              <div>
                <p className="text-foreground font-semibold text-sm">{stats[1].label}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{stats[1].sub}</p>
              </div>
            </div>
            {/* Stat 3 */}
            <div className="bg-primary rounded-2xl p-5 flex flex-col justify-between">
              <p className="text-3xl font-bold text-primary-foreground leading-none">12+</p>
              <div>
                <p className="text-primary-foreground font-semibold text-sm">Brands</p>
                <p className="text-primary-foreground/70 text-xs mt-0.5">trusted partners</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile fallback: simple grid */}
        <div className="md:hidden mt-4 grid grid-cols-1 gap-4">
          {images.slice(1).map((img, i) => (
            <div key={i} className="h-52 overflow-hidden rounded-2xl">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-foreground rounded-2xl p-5 flex flex-col justify-between h-32">
              <p className="text-2xl font-bold text-background">{stats[1].value}</p>
              <p className="text-background/80 text-sm">{stats[1].label}</p>
            </div>
            <div className="bg-primary rounded-2xl p-5 flex flex-col justify-between h-32">
              <p className="text-2xl font-bold text-primary-foreground">12+</p>
              <p className="text-primary-foreground/80 text-sm">Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
