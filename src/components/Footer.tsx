import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground py-12 md:py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Kaymo Tech" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-accent-foreground/70 text-sm">
              A division of Kaymo Group. CIDB registered civil engineering and
              construction company.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-accent-foreground/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-accent-foreground/70 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/projects" className="text-accent-foreground/70 hover:text-primary transition-colors text-sm">Projects</Link></li>
              <li><Link to="/contact" className="text-accent-foreground/70 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-accent-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-accent-foreground/70 text-sm">Road Construction</li>
              <li className="text-accent-foreground/70 text-sm">Road Rehabilitation</li>
              <li className="text-accent-foreground/70 text-sm">Water Pipelines</li>
              <li className="text-accent-foreground/70 text-sm">Sewer Infrastructure</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-accent-foreground/60 text-sm">
            © {currentYear} Kaymo Tech (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-accent-foreground/60">CIDB Registered</span>
            <span className="text-accent-foreground/30">|</span>
            <span className="text-accent-foreground/60">B-BBEE Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
