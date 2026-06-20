import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

interface Client {
  id: string;
  name: string;
  year: string;
  images: string[];
  cover: string;
}

const clients: Client[] = [
  {
    id: "flytime",
    name: "Flytime",
    year: "2025",
    cover: "/images/flytime-07.jpg",
    images: [
      "/images/flytime-01.jpg",
      "/images/flytime-02.jpg",
      "/images/flytime-03.jpg",
      "/images/flytime-04.jpg",
      "/images/flytime-05.jpg",
      "/images/flytime-06.jpg",
      "/images/flytime-07.jpg",
      "/images/flytime-08.jpg",
      "/images/flytime-09.jpg",
      "/images/flytime-10.jpg",
      "/images/flytime-11.jpg",
      "/images/flytime-12.jpg",
      "/images/flytime-13.jpg",
      "/images/flytime-14.jpg",
      "/images/flytime-15.jpg",
      "/images/flytime-16.jpg",
      "/images/flytime-17.jpg",
      "/images/flytime-18.jpg",
      "/images/flytime-19.jpg",
      "/images/flytime-20.jpg",
      "/images/flytime-21.jpg",
      "/images/flytime-22.jpg",
      "/images/flytime-23.jpg",
      "/images/flytime-24.jpg",
      "/images/flytime-25.jpg",
      "/images/flytime-26.jpg",
      "/images/flytime-27.jpg",
      "/images/flytime-28.jpg",
      "/images/flytime-29.jpg",
      "/images/flytime-30.jpg",
      "/images/flytime-31.jpg",
      "/images/flytime-32.jpg",
      "/images/flytime-33.jpg",
      "/images/flytime-34.jpg",
      "/images/flytime-35.jpg",
      "/images/flytime-36.jpg",
      "/images/flytime-37.jpg",
      "/images/flytime-38.jpg",
      "/images/flytime-39.jpg",
      "/images/flytime-40.jpg",
      "/images/flytime-41.jpg",
      "/images/flytime-42.jpg",
      "/images/flytime-43.jpg",
      "/images/flytime-44.jpg",
      "/images/flytime-45.jpg",
      "/images/flytime-46.jpg",
      "/images/flytime-47.jpg",
      "/images/flytime-48.jpg",
      "/images/flytime-49.jpg",
      "/images/flytime-50.jpg",
      "/images/flytime-51.jpg",
      "/images/flytime-52.jpg",
      "/images/flytime-53.jpg",
      "/images/flytime-54.jpg",
      "/images/flytime-55.jpg",
      "/images/flytime-56.jpg",
      "/images/flytime-57.jpg",
      "/images/flytime-58.jpg",
      "/images/flytime-59.jpg",
      "/images/flytime-60.jpg",
      "/images/flytime-61.jpg",
      "/images/flytime-62.jpg",
      "/images/flytime-63.jpg",
      "/images/flytime-64.jpg",
      "/images/flytime-65.jpg",
      "/images/flytime-66.jpg",
      "/images/flytime-67.jpg",
      "/images/flytime-68.jpg",
      "/images/flytime-69.jpg",
      "/images/flytime-70.jpg",
      "/images/flytime-71.jpg",
      "/images/flytime-72.jpg",
      "/images/flytime-73.jpg",
      "/images/flytime-74.jpg",
      "/images/flytime-75.jpg",
      "/images/flytime-76.jpg",
      "/images/flytime-77.jpg",
      "/images/flytime-78.jpg",
      "/images/flytime-79.jpg",
      "/images/flytime-80.jpg",
      "/images/flytime-81.jpg",
    ],
  },
  {
    id: "dano",
    name: "FunnyBone X Dano",
    year: "",
    cover: "/images/dano-08.jpg",
    images: [
      "/images/dano-01.jpg",
      "/images/dano-02.jpg",
      "/images/dano-03.jpg",
      "/images/dano-04.jpg",
      "/images/dano-05.jpg",
      "/images/dano-06.jpg",
      "/images/dano-07.jpg",
      "/images/dano-08.jpg",
      "/images/dano-09.jpg",
      "/images/dano-10.jpg",
      "/images/dano-11.jpg",
    ],
  },
  {
    id: "slb",
    name: "SLB",
    year: "2026",
    cover: "/images/slide-09.jpg",
    images: [],
  },
  {
    id: "coc",
    name: "C.O.C",
    year: "2.0",
    cover: "/images/slide-04.jpeg",
    images: [],
  },
];

interface GalleryProps {
  open: boolean;
  onClose: () => void;
}

export function Gallery({ open, onClose }: GalleryProps) {
  const [activeClient, setActiveClient] = useState<Client | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const goBack = useCallback(() => {
    if (lightboxIdx !== null) { closeLightbox(); return; }
    setActiveClient(null);
  }, [lightboxIdx, closeLightbox]);

  const prevImage = useCallback(() => {
    if (lightboxIdx === null || !activeClient) return;
    setLightboxIdx((lightboxIdx - 1 + activeClient.images.length) % activeClient.images.length);
  }, [lightboxIdx, activeClient]);

  const nextImage = useCallback(() => {
    if (lightboxIdx === null || !activeClient) return;
    setLightboxIdx((lightboxIdx + 1) % activeClient.images.length);
  }, [lightboxIdx, activeClient]);

  useEffect(() => {
    if (!open) { setActiveClient(null); setLightboxIdx(null); }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { if (lightboxIdx !== null) closeLightbox(); else if (activeClient) setActiveClient(null); else onClose(); }
      if (e.key === "ArrowLeft")  prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lightboxIdx, activeClient, closeLightbox, prevImage, nextImage, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col overflow-hidden"
        >
          {/* ── Top bar ─────────────────────────────────────────────── */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-4">
              {(activeClient || lightboxIdx !== null) && (
                <button
                  onClick={goBack}
                  className="text-white/60 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest font-medium">Our Gallery</p>
                {activeClient && (
                  <p className="text-white font-semibold text-lg leading-tight">
                    {activeClient.name}
                    {activeClient.year && (
                      <span className="text-primary ml-1.5">{activeClient.year}</span>
                    )}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ── Content area ────────────────────────────────────────── */}
          <div className="flex-1 overflow-y-auto bg-[#f5f5f5]">
            <AnimatePresence mode="wait">
              {!activeClient ? (
                /* ── Client selection grid ───────────────────────── */
                <motion.div
                  key="clients"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 md:p-10 bg-black/95"
                >
                  <p className="text-white/50 text-sm mb-8 max-w-lg">
                    Select a client to explore their event gallery.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {clients.map((client, i) => (
                      <motion.button
                        key={client.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.07 }}
                        onClick={() => setActiveClient(client)}
                        className="group relative aspect-[3/4] rounded-2xl overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <img
                          src={client.cover}
                          alt={client.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        {client.images.length === 0 && (
                          <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm text-white/70 text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">
                            Coming soon
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <p className="text-white font-bold text-xl leading-tight">
                            {client.name}
                            {client.year && (
                              <span className="text-primary ml-1">{client.year}</span>
                            )}
                          </p>
                          {client.images.length > 0 && (
                            <p className="text-white/60 text-xs mt-1">
                              {client.images.length} photos
                            </p>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : activeClient.images.length === 0 ? (
                /* ── Empty state ─────────────────────────────────── */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-6 bg-black/95"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-5">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-white font-semibold text-xl mb-2">Gallery coming soon</p>
                  <p className="text-white/40 text-sm max-w-sm">
                    Photos for{" "}
                    <span className="text-white/70">
                      {activeClient.name} {activeClient.year}
                    </span>{" "}
                    will be uploaded shortly.
                  </p>
                </motion.div>
              ) : (
                /* ── Pinterest-style masonry photo grid ──────────── */
                <motion.div
                  key={activeClient.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="p-2 md:p-3"
                >
                  <div
                    className="
                      columns-2
                      sm:columns-3
                      md:columns-4
                      lg:columns-5
                      xl:columns-6
                      gap-2 md:gap-3
                    "
                  >
                    {activeClient.images.map((src, i) => (
                      <motion.button
                        key={src}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(i * 0.03, 0.4), duration: 0.3 }}
                        onClick={() => setLightboxIdx(i)}
                        className="
                          break-inside-avoid w-full block
                          mb-2 md:mb-3
                          rounded-2xl overflow-hidden
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
                          group cursor-zoom-in
                          bg-white
                          shadow-[0_1px_3px_rgba(0,0,0,0.12)]
                          hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)]
                          transition-shadow duration-200
                        "
                      >
                        <img
                          src={src}
                          alt={`${activeClient.name} photo ${i + 1}`}
                          className="w-full h-auto object-cover block transition-opacity duration-200 group-hover:opacity-90"
                          loading="lazy"
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Lightbox overlay ────────────────────────────────────── */}
          <AnimatePresence>
            {lightboxIdx !== null && activeClient && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 z-10 bg-black flex items-center justify-center"
                onClick={closeLightbox}
              >
                {/* Close */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-20"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Counter */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums z-20">
                  {lightboxIdx + 1} / {activeClient.images.length}
                </div>

                {/* Prev */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIdx}
                    src={activeClient.images[lightboxIdx]}
                    alt={`${activeClient.name} photo ${lightboxIdx + 1}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl z-10"
                  />
                </AnimatePresence>

                {/* Next */}
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
