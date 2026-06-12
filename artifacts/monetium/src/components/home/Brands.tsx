import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";

export function Brands() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedBrand(current => {
        const currentIndex = brands.findIndex(b => b.id === current.id);
        const nextIndex = (currentIndex + 1) % brands.length;
        return brands[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleBrandClick = (brand: typeof brands[0]) => {
    setSelectedBrand(brand);
    setIsAutoPlaying(false);
  };

  return (
    <section id="brands" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Brands We've Brought to Life</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            From global consumer brands to industry leaders, we design experiences that connect people, products, and memorable moments.
          </h3>
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {brands.map((brand) => (
            <motion.button
              key={brand.id}
              onClick={() => handleBrandClick(brand)}
              className={`h-24 flex items-center justify-center border transition-all duration-300 rounded-[5px] ${
                selectedBrand.id === brand.id 
                  ? "bg-card border-primary text-primary shadow-[0_0_15px_rgba(230,0,0,0.1)]" 
                  : "bg-transparent border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {brand.icon ? (
                <brand.icon className="w-10 h-10" />
              ) : (
                <span className="font-serif font-bold text-lg tracking-wider">{brand.name}</span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Featured Brand Preview */}
        <div className="bg-card border border-border p-8 lg:p-12 relative overflow-hidden rounded-[5px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBrand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="lg:w-1/3 w-full">
                <h4 className="text-3xl font-serif font-bold text-primary mb-4">
                  {selectedBrand.name}
                </h4>
                <p className="text-muted-foreground mb-8">
                  Premium brand experiences, consumer activations, and unforgettable moments designed exclusively for {selectedBrand.name}.
                </p>
                <Link href={`/brands/${selectedBrand.id}`} className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group rounded-[5px]">
                  View Full Experience
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="lg:w-2/3 w-full grid grid-cols-2 gap-4">
                {selectedBrand.previewImages.slice(0, 2).map((img, idx) => (
                  <div key={idx} className="aspect-[4/3] overflow-hidden bg-background">
                    <img src={img} alt={`${selectedBrand.name} experience`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
