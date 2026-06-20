import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gallery } from "./Gallery";

const stats = [
  { value: "5,000+", label: "Attendees",         sub: "Unilever Sales Conference" },
  { value: "3×",     label: "Consecutive Years", sub: "Coke Studio Activation"   },
];

const slides = [
  "/images/slide-01.jpeg",
  "/images/slide-02.jpeg",
  "/images/slide-03.jpeg",
  "/images/slide-04.jpeg",
  "/images/slide-05.jpeg",
  "/images/slide-06.jpg",
  "/images/slide-07.jpg",
  "/images/slide-08.jpg",
  "/images/slide-09.jpg",
  "/images/slide-10.jpg",
  "/images/slide-11.jpg",
  "/images/slide-12.jpg",
  "/images/slide-13.jpg",
  "/images/slide-14.jpg",
  "/images/slide-15.jpg",
  "/images/slide-16.jpg",
];

const N = slides.length;

function SlideImage({ src, alt }: { src: string; alt: string }) {
  return (
    <AnimatePresence mode="sync">
      <motion.img
        key={src}
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
  );
}

function useSlide(startAt: number, delay: number) {
  const [idx, setIdx] = useState(startAt % N);
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      timer = setInterval(() => setIdx((p) => (p + 1) % N), 5000);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [delay]);
  return [idx, setIdx] as const;
}

export function Portfolio() {
  const [tallIdx,     setTallIdx]     = useSlide(0, 0);
  const [topRightIdx]                 = useSlide(5, 1667);
  const [botLeftIdx]                  = useSlide(10, 3333);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const tall     = slides[tallIdx];
  const topRight = slides[topRightIdx];
  const botLeft  = slides[botLeftIdx];
  const mobile   = slides[tallIdx];

  return (
    <>
      <Gallery open={galleryOpen} onClose={() => setGalleryOpen(false)} />

      <section id="portfolio" className="py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">

          {/* ── Section heading ──────────────────────────────────────── */}
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
            <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl relative">
              <SlideImage src={tall} alt="Portfolio slideshow" />
            </div>

            {/* [0,2] Top-right image */}
            <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl relative">
              <SlideImage src={topRight} alt="Portfolio slideshow" />
            </div>

            {/* [1,0] Bottom-left image */}
            <div className="col-span-1 row-span-1 overflow-hidden rounded-2xl relative">
              <SlideImage src={botLeft} alt="Portfolio slideshow" />
            </div>

            {/* [1,2] Two mini stat tiles */}
            <div className="col-span-1 row-span-1 grid grid-cols-2 gap-4">
              {/* Coke Studio stat */}
              <div className="relative bg-primary rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
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

            {/* Single mobile slideshow */}
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <SlideImage src={mobile} alt="Portfolio slideshow" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTallIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === tallIdx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Brands tile */}
            <div className="bg-background border border-border rounded-2xl p-5 flex items-center justify-between">
              <p className="text-3xl font-bold text-foreground">12+</p>
              <div className="text-right">
                <p className="text-foreground font-semibold text-sm">Brands</p>
                <p className="text-muted-foreground text-xs">trusted partners</p>
              </div>
            </div>
          </motion.div>

          {/* ── View Our Gallery CTA ──────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setGalleryOpen(true)}
              className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary transition-colors duration-300"
            >
              <span>View Our Gallery</span>
              <span className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </motion.div>

        </div>
      </section>
    </>
  );
}
