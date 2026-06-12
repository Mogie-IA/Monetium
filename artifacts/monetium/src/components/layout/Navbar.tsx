import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/logo-light.png";

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
    <header className="sticky top-0 z-50 h-16 bg-white border-b border-border flex items-center">
      <div className="w-full px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" data-testid="link-logo">
          <img src={logoLight} alt="Monetium" className="h-10 w-auto" />
        </Link>

        {/* Desktop links — centred */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/#contact"
          onClick={(e) => handleNavClick(e, "/#contact")}
          className="hidden sm:inline-flex items-center px-5 py-2 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/85 transition-colors"
          data-testid="button-nav-cta"
        >
          Contact Us
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg z-50"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-2 px-4 py-3 bg-foreground text-background text-center font-semibold rounded-full hover:bg-foreground/85 transition-colors"
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
