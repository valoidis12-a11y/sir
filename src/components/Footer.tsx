import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="NextGen" className="h-16 w-auto mb-4 brightness-200" />
            <p className="text-sm opacity-90">
              Leading provider of heavy equipment maintenance and repair services in UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-sm hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Equipment Maintenance</li>
              <li>Repair & Overhaul</li>
              <li>Parts Supply</li>
              <li>Emergency Services</li>
              <li>Equipment Rental</li>
              <li>Technical Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+97148847048" className="flex items-start gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+971 4 8847048</span>
              </a>
              <a href="mailto:info@technomech-uae.com" className="flex items-start gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@technomech-uae.com</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>United Arab Emirates</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} NextGen Heavy Equipments and Maintenance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
