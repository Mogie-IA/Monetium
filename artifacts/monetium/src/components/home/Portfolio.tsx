import { motion } from "framer-motion";

const stats = [
  { value: "5,000+", label: "Attendees",         sub: "Unilever Sales Conference" },
  { value: "3×",     label: "Consecutive Years", sub: "Coke Studio Activation"   },
];

const images = [
  { src: "/images/portfolio-flytime.png",  alt: "Flytime Live Experience"    },
  { src: "/images/portfolio-unilever.png", alt: "Unilever Sales Conference"  },
  { src: "/images/portfolio-cch.png",      alt: "CCH Council of Chiefs"      },
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
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">Portfolio Highlights</h3>
        </motion.div>

        {/* ── Desktop bento grid (md+) ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="hidden md:grid grid-cols-3 grid-rows-[280px_280px] gap-4"
        >
          {/* [0,0] Dark stat tile */}
          <div className="col-span-1 row-span-1 bg-foreground rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-4xl font-bold text-background leading-none">{stats[0].value}</p>
              <p className="text-background/60 text-sm mt-2">{stats[0].sub}</p>
            </div>
            <p className="text-background/80 text-lg font-medium">{stats[0].label}</p>
          </div>

          {/* [0,1] Tall image spanning 2 rows */}
          <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl">
            <img src={images[0].src} alt={images[0].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* [0,2] Image tile */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <img src={images[2].src} alt={images[2].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* [1,0] Image tile */}
          <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl">
            <img src={images[1].src} alt={images[1].alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* [1,2] Two stat tiles side by side */}
          <div className="col-span-1 row-span-1 grid grid-cols-2 gap-4">
            {/* Coke Studio stat — red + Coke logo watermark */}
            <div className="relative bg-primary rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
              {/* Coke logo watermark */}
              <img
                src="/images/brand-coca-cola-1.png"
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-contain scale-110 opacity-[0.12] pointer-events-none"
              />
              <div className="absolute inset-0 bg-primary/70 rounded-2xl" />
              <p className="text-3xl font-bold text-white leading-none relative z-10">{stats[1].value}</p>
              <div className="relative z-10">
                <p className="text-white font-semibold text-sm">{stats[1].label}</p>
                <p className="text-white/70 text-xs mt-0.5">{stats[1].sub}</p>
              </div>
            </div>

            {/* Brands tile */}
            <div className="bg-background border border-border rounded-2xl p-5 flex flex-col justify-between">
              <p className="text-3xl font-bold text-foreground leading-none">12+</p>
              <div>
                <p className="text-foreground font-semibold text-sm">Brands</p>
                <p className="text-muted-foreground text-xs mt-0.5">trusted partners</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Mobile layout (< md) ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="md:hidden flex flex-col gap-4"
        >
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-foreground rounded-2xl p-5 flex flex-col justify-between h-36">
              <p className="text-3xl font-bold text-background">{stats[0].value}</p>
              <div>
                <p className="text-background/80 text-sm font-medium">{stats[0].label}</p>
                <p className="text-background/50 text-xs mt-0.5">{stats[0].sub}</p>
              </div>
            </div>

            {/* Coke stat — mobile */}
            <div className="relative bg-primary rounded-2xl p-5 flex flex-col justify-between h-36 overflow-hidden">
              <img
                src="/images/brand-coca-cola-1.png"
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-contain scale-110 opacity-[0.12] pointer-events-none"
              />
              <div className="absolute inset-0 bg-primary/70 rounded-2xl" />
              <p className="text-3xl font-bold text-white leading-none relative z-10">{stats[1].value}</p>
              <div className="relative z-10">
                <p className="text-white font-semibold text-sm">{stats[1].label}</p>
                <p className="text-white/70 text-xs mt-0.5">{stats[1].sub}</p>
              </div>
            </div>
          </div>

          {/* Images */}
          {images.map((img, i) => (
            <div key={i} className="h-56 overflow-hidden rounded-2xl">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Brands tile */}
          <div className="bg-background border border-border rounded-2xl p-5 flex items-center justify-between">
            <p className="text-3xl font-bold text-foreground">12+</p>
            <div className="text-right">
              <p className="text-foreground font-semibold text-sm">Brands</p>
              <p className="text-muted-foreground text-xs">trusted partners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
