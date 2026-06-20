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
    cover: "/images/flytime-07.webp",
    images: [
      "/images/flytime-01.webp",
      "/images/flytime-02.webp",
      "/images/flytime-03.webp",
      "/images/flytime-04.webp",
      "/images/flytime-05.webp",
      "/images/flytime-06.webp",
      "/images/flytime-07.webp",
      "/images/flytime-08.webp",
      "/images/flytime-09.webp",
      "/images/flytime-10.webp",
      "/images/flytime-11.webp",
      "/images/flytime-12.webp",
      "/images/flytime-13.webp",
      "/images/flytime-14.webp",
      "/images/flytime-15.webp",
      "/images/flytime-16.webp",
      "/images/flytime-17.webp",
      "/images/flytime-18.webp",
      "/images/flytime-19.webp",
      "/images/flytime-20.webp",
      "/images/flytime-21.webp",
      "/images/flytime-22.webp",
      "/images/flytime-23.webp",
      "/images/flytime-24.webp",
      "/images/flytime-25.webp",
      "/images/flytime-26.webp",
      "/images/flytime-27.webp",
      "/images/flytime-28.webp",
      "/images/flytime-29.webp",
      "/images/flytime-30.webp",
      "/images/flytime-31.webp",
      "/images/flytime-32.webp",
      "/images/flytime-33.webp",
      "/images/flytime-34.webp",
      "/images/flytime-35.webp",
      "/images/flytime-36.webp",
      "/images/flytime-37.webp",
      "/images/flytime-38.webp",
      "/images/flytime-39.webp",
      "/images/flytime-40.webp",
      "/images/flytime-41.webp",
      "/images/flytime-42.webp",
      "/images/flytime-43.webp",
      "/images/flytime-44.webp",
      "/images/flytime-45.webp",
      "/images/flytime-46.webp",
      "/images/flytime-47.webp",
      "/images/flytime-48.webp",
      "/images/flytime-49.webp",
      "/images/flytime-50.webp",
      "/images/flytime-51.webp",
      "/images/flytime-52.webp",
      "/images/flytime-53.webp",
      "/images/flytime-54.webp",
      "/images/flytime-55.webp",
      "/images/flytime-56.webp",
      "/images/flytime-57.webp",
      "/images/flytime-58.webp",
      "/images/flytime-59.webp",
      "/images/flytime-60.webp",
      "/images/flytime-61.webp",
      "/images/flytime-62.webp",
      "/images/flytime-63.webp",
      "/images/flytime-64.webp",
      "/images/flytime-65.webp",
      "/images/flytime-66.webp",
      "/images/flytime-67.webp",
      "/images/flytime-68.webp",
      "/images/flytime-69.webp",
      "/images/flytime-70.webp",
      "/images/flytime-71.webp",
      "/images/flytime-72.webp",
      "/images/flytime-73.webp",
      "/images/flytime-74.webp",
      "/images/flytime-75.webp",
      "/images/flytime-76.webp",
      "/images/flytime-77.webp",
      "/images/flytime-78.webp",
      "/images/flytime-79.webp",
      "/images/flytime-80.webp",
      "/images/flytime-81.webp",
    ],
  },
  {
    id: "dano",
    name: "FunnyBone X Dano",
    year: "",
    cover: "/images/dano-08.webp",
    images: [
      "/images/dano-01.webp",
      "/images/dano-02.webp",
      "/images/dano-03.webp",
      "/images/dano-04.webp",
      "/images/dano-05.webp",
      "/images/dano-06.webp",
      "/images/dano-07.webp",
      "/images/dano-08.webp",
      "/images/dano-09.webp",
      "/images/dano-10.webp",
      "/images/dano-11.webp",
      "/images/dano-12.webp",
      "/images/dano-13.webp",
      "/images/dano-14.webp",
      "/images/dano-15.webp",
      "/images/dano-16.webp",
      "/images/dano-17.webp",
      "/images/dano-18.webp",
      "/images/dano-19.webp",
      "/images/dano-20.webp",
      "/images/dano-21.webp",
      "/images/dano-22.webp",
      "/images/dano-23.webp",
      "/images/dano-24.webp",
      "/images/dano-25.webp",
      "/images/dano-26.webp",
      "/images/dano-27.webp",
      "/images/dano-28.webp",
      "/images/dano-29.webp",
      "/images/dano-30.webp",
      "/images/dano-31.webp",
      "/images/dano-32.webp",
      "/images/dano-33.webp",
      "/images/dano-34.webp",
      "/images/dano-35.webp",
      "/images/dano-36.webp",
      "/images/dano-37.webp",
      "/images/dano-38.webp",
      "/images/dano-39.webp",
      "/images/dano-40.webp",
      "/images/dano-41.webp",
    ],
  },
  {
    id: "slb",
    name: "SLB",
    year: "2026",
    cover: "/images/slb-02.webp",
    images: [
      "/images/slb-01.webp",
      "/images/slb-02.webp",
      "/images/slb-03.webp",
      "/images/slb-04.webp",
      "/images/slb-05.webp",
      "/images/slb-06.webp",
      "/images/slb-07.webp",
      "/images/slb-08.webp",
      "/images/slb-09.webp",
      "/images/slb-10.webp",
      "/images/slb-11.webp",
      "/images/slb-12.webp",
      "/images/slb-13.webp",
      "/images/slb-14.webp",
      "/images/slb-15.webp",
      "/images/slb-16.webp",
      "/images/slb-17.webp",
      "/images/slb-18.webp",
      "/images/slb-19.webp",
      "/images/slb-20.webp",
      "/images/slb-21.webp",
      "/images/slb-22.webp",
      "/images/slb-23.webp",
      "/images/slb-24.webp",
      "/images/slb-25.webp",
      "/images/slb-26.webp",
      "/images/slb-27.webp",
      "/images/slb-28.webp",
      "/images/slb-29.webp",
      "/images/slb-30.webp",
      "/images/slb-31.webp",
      "/images/slb-32.webp",
      "/images/slb-33.webp",
      "/images/slb-34.webp",
      "/images/slb-35.webp",
      "/images/slb-36.webp",
      "/images/slb-37.webp",
      "/images/slb-38.webp",
      "/images/slb-39.webp",
      "/images/slb-40.webp",
      "/images/slb-41.webp",
      "/images/slb-42.webp",
      "/images/slb-43.webp",
      "/images/slb-44.webp",
      "/images/slb-45.webp",
      "/images/slb-46.webp",
      "/images/slb-47.webp",
      "/images/slb-48.webp",
      "/images/slb-49.webp",
      "/images/slb-50.webp",
      "/images/slb-51.webp",
      "/images/slb-52.webp",
      "/images/slb-53.webp",
      "/images/slb-54.webp",
      "/images/slb-55.webp",
      "/images/slb-56.webp",
      "/images/slb-57.webp",
      "/images/slb-58.webp",
      "/images/slb-59.webp",
      "/images/slb-60.webp",
      "/images/slb-61.webp",
      "/images/slb-62.webp",
      "/images/slb-63.webp",
      "/images/slb-64.webp",
    ],
  },
  {
    id: "coc",
    name: "C.O.C",
    year: "2.0",
    cover: "/images/coc-04.webp",
    images: [
      "/images/coc-01.webp",
      "/images/coc-02.webp",
      "/images/coc-03.webp",
      "/images/coc-04.webp",
      "/images/coc-05.webp",
      "/images/coc-06.webp",
      "/images/coc-07.webp",
      "/images/coc-08.webp",
      "/images/coc-09.webp",
      "/images/coc-10.webp",
      "/images/coc-11.webp",
      "/images/coc-12.webp",
      "/images/coc-13.webp",
      "/images/coc-14.webp",
      "/images/coc-15.webp",
      "/images/coc-16.webp",
      "/images/coc-17.webp",
      "/images/coc-18.webp",
      "/images/coc-19.webp",
      "/images/coc-20.webp",
      "/images/coc-21.webp",
      "/images/coc-22.webp",
    ],
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
