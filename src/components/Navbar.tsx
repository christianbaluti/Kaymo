import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const showWhiteLogo = isHomePage && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-background/95 backdrop-blur-md shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Kaymo Tech"
                className={`h-12 md:h-14 transition-all duration-300 ${
                  showWhiteLogo ? "brightness-0 invert" : ""
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-medium transition-colors ${
                    showWhiteLogo
                      ? "text-white hover:text-primary"
                      : "text-foreground hover:text-primary"
                  } ${location.pathname === link.href ? "text-primary" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+27571010003"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  showWhiteLogo
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                <Phone className="h-4 w-4" />
                +27 57 101 0003
              </a>
              <Button onClick={() => setIsQuoteModalOpen(true)}>
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden p-2 ${showWhiteLogo ? "text-white" : "text-foreground"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background border-t border-border py-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-2 font-medium ${
                      location.pathname === link.href ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-border">
                  <Button
                    className="w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsQuoteModalOpen(true);
                    }}
                  >
                    Get a Quote
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
};

export default Navbar;
