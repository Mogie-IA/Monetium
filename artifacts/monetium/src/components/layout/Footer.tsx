import { Link } from "wouter";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logoSrc from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 block" data-testid="link-footer-logo">
              <img src={logoSrc} alt="Monetium" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-md text-lg">
              Creating experiences that connect brands with people. Bold, strategic, and memorable.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="mailto:info@monetium.ng" className="text-muted-foreground hover:text-primary transition-colors">info@monetium.ng</a></li>
              <li><a href="tel:+2340000000000" className="text-muted-foreground hover:text-primary transition-colors">+234 000 000 0000</a></li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-[5px] bg-muted flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-[5px] bg-muted flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-[5px] bg-muted flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="WhatsApp">
                  <FaWhatsapp size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Monetium. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
