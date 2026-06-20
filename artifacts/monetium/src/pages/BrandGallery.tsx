import { useState } from "react";
import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BrandGallery() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brands.find(b => b.id === brandId);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!brand) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Brand Not Found</h1>
        <Link href="/" className="text-primary hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  // Extend preview images to act as gallery (incorporating the new images if coca-cola)
  let galleryImages = [...brand.previewImages];
  
  if (brand.id === "coca-cola" || brand.id === "cch") {
    galleryImages = [
      ...galleryImages,
      "/images/gallery-coca-cola-1.webp",
      "/images/gallery-coca-cola-2.webp",
      "/images/gallery-coca-cola-3.webp",
      "/images/gallery-coca-cola-4.webp",
    ];
  } else {
    // just pad out the gallery with other placeholders to make it look full
    galleryImages = [
      ...galleryImages,
      "/images/portfolio-flytime.webp",
      "/images/portfolio-unilever.webp",
      "/images/portfolio-cch.webp",
    ];
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          <Link href="/#brands" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 uppercase text-xs tracking-widest font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Brands
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-end mb-20 border-b border-border pb-12">
            <div className="flex-1">
              {brand.icon ? (
                <brand.icon className="w-20 h-20 text-foreground mb-8" />
              ) : (
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-widest text-foreground mb-8">
                  {brand.name.toUpperCase()}
                </h1>
              )}
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight max-w-3xl">
                Immersive brand experiences delivered with precision and impact.
              </h2>
            </div>
            <div className="md:w-1/3">
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                We partnered with {brand.name} to design and execute premium activations that captivate audiences, foster loyalty, and create lasting memories. Explore the highlights from our collaboration.
              </p>
            </div>
          </div>

          {/* Masonry/Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden bg-card ${
                  index % 4 === 0 || index % 5 === 0 ? "md:col-span-2 md:aspect-[21/9]" : "aspect-[4/3]"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={src} 
                  alt={`${brand.name} gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 p-12 bg-card border border-border text-center rounded-[5px]">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Want an experience like this for your brand?
            </h3>
            <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-colors rounded-[5px]">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-2 z-[101]"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-2 z-[101]"
              onClick={handleNext}
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedImage]} 
                alt={`${brand.name} enlarged view`} 
                className="max-w-full max-h-[80vh] object-contain border border-border shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-muted-foreground">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
