import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoDark from "@/assets/logo-dark.png";

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
    <header className="sticky top-0 z-50 flex justify-center items-center px-4 py-3 bg-white">
      {/* Dark pill container */}
      <div className="bg-[#1a1a1a] rounded-full px-3 py-1.5 flex items-center gap-2 w-full max-w-2xl shadow-lg">

        {/* Logo inside pill */}
        <Link href="/" className="flex items-center shrink-0 mr-2" data-testid="link-logo">
          <img
            src={logoDark}
            alt="Monetium"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav links — centred inside pill, no hamburger */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-all whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA — white pill button on right */}
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="ml-auto shrink-0 px-4 py-1.5 bg-white text-foreground text-sm font-semibold rounded-full hover:bg-white/90 transition-colors hidden lg:block"
          data-testid="button-nav-cta"
        >
          Contact Us
        </a>

        {/* Mobile hamburger — only on small screens */}
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
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute top-[60px] left-4 right-4 bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-50"
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
