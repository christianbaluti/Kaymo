import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/headers/hero-header.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Road construction in South Africa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/40" />
      </div>

      <div className="container-wide relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1.5 mb-4 animate-fade-in">
            <Shield className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary-foreground">
              CIDB Registered Contractor
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4 animate-fade-in leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Building Roads.
            <br />
            <span className="text-primary">Delivering Infrastructure.</span>
          </h1>

          <p
            className="text-base md:text-lg text-accent-foreground/80 mb-6 max-w-xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Kaymo Tech is a South African civil engineering company specialising
            in road construction, rehabilitation, and water & sewer infrastructure.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 max-w-md animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-0.5">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span className="text-xl md:text-2xl font-bold text-accent-foreground">
                  5+
                </span>
              </div>
              <p className="text-xs text-accent-foreground/70">Years Experience</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-0.5">
                <Award className="h-3.5 w-3.5 text-primary" />
                <span className="text-xl md:text-2xl font-bold text-accent-foreground">
                  4CE
                </span>
              </div>
              <p className="text-xs text-accent-foreground/70">CIDB Grade</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-0.5">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span className="text-xl md:text-2xl font-bold text-accent-foreground">
                  100%
                </span>
              </div>
              <p className="text-xs text-accent-foreground/70">Compliant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
