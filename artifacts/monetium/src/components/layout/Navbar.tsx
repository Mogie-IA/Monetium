import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoSrc from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Brands", href: "/#brands" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center" data-testid="link-logo">
          <img src={logoSrc} alt="Monetium" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            Let's Build Your Next Experience
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-4 px-5 py-3 bg-primary text-primary-foreground text-center font-medium"
              >
                Let's Build Your Next Experience
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
