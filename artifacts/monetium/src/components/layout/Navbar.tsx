import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About",     href: "/#about" },
  { label: "Services",  href: "/#services" },
  { label: "Brands",    href: "/#brands" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Why Us",    href: "/#why-us" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      {/* Pill container */}
      <div className="bg-[#1a1a1a] rounded-full px-3 py-2 flex items-center gap-3 shadow-2xl w-full max-w-3xl">

        {/* Logo mark + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          data-testid="link-logo"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-black text-xs tracking-tight">M</span>
          </div>
          <span className="text-white font-bold text-sm tracking-widest uppercase hidden sm:block">
            Monetium
          </span>
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-white/20 hidden lg:block" />

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="ml-auto shrink-0 px-5 py-2 bg-white text-foreground text-sm font-semibold rounded-full hover:bg-white/90 transition-colors hidden sm:block"
          data-testid="button-nav-cta"
        >
          Contact Us
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto p-1.5 text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute top-16 left-4 right-4 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-2 px-4 py-3 bg-white text-foreground text-center font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
