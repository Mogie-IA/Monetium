import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border/60">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Main strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-6">

          {/* Left: location */}
          <div>
            <p className="text-xs text-foreground/50">Lagos, Nigeria</p>
            <p className="text-xs text-foreground/50">2025</p>
          </div>

          {/* Centre: hours */}
          <p className="text-xs text-foreground/50">
            Office hours — Mon–Fri &nbsp;9 AM – 6 PM
          </p>

          {/* Right: say hello + socials */}
          <div className="flex items-center gap-5">
            <span className="text-xs text-foreground/50">Say hello</span>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-foreground/50 hover:text-primary transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground/50 hover:text-primary transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-foreground/50 hover:text-primary transition-colors"
            >
              <FaWhatsapp size={16} />
            </a>
            <a href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors ml-2">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/40 py-4">
          <p className="text-xs text-foreground/35">
            © 2025 Monetium. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
