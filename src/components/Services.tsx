import { Construction, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SmartImage from "@/components/SmartImage";
import roadImage from "@/assets/road.jpeg";
import waterImage from "@/assets/water.jpeg";

const Services = () => {
  const roadServices = [
    "New road construction (gravel and asphalt)",
    "Road rehabilitation and resurfacing",
    "Pothole repairs and patching",
    "Earthworks and layerworks (G5–G7)",
    "Stormwater drainage systems",
    "Kerbing, paving, and sidewalks",
    "Road markings and ancillary works",
  ];

  const waterServices = [
    "Bulk and reticulation water pipelines",
    "Sewer pipeline installation and upgrades",
    "Manhole construction and rehabilitation",
    "Pump station civil works",
    "Sump cleaning and sludge removal",
    "Trenching, backfilling, and reinstatement",
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg text-foreground mt-3 mb-4">
            Comprehensive Civil Engineering Solutions
          </h2>
          <p className="body-lg">
            From road construction to water infrastructure, we deliver quality
            civil works that stand the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Road Construction Card */}
          <div className="service-card group overflow-hidden">
            <div className="relative h-48 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden">
              <SmartImage
                src={roadImage}
                alt="Road Construction"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
              <div className="absolute bottom-4 left-4 md:left-6">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-3 py-2">
                  <Construction className="h-5 w-5" />
                  <span className="font-semibold">Road Construction</span>
                </div>
              </div>
            </div>
            <h3 className="heading-md text-foreground mb-4">
              Road Construction & Rehabilitation
            </h3>
            <ul className="space-y-3 mb-6">
              {roadServices.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent" asChild>
              <Link to="/services#road-construction">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Water Infrastructure Card */}
          <div className="service-card group overflow-hidden">
            <div className="relative h-48 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden">
              <SmartImage
                src={waterImage}
                alt="Water Infrastructure"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent" />
              <div className="absolute bottom-4 left-4 md:left-6">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-3 py-2">
                  <Droplets className="h-5 w-5" />
                  <span className="font-semibold">Water & Sewer</span>
                </div>
              </div>
            </div>
            <h3 className="heading-md text-foreground mb-4">
              Water & Sewer Infrastructure
            </h3>
            <ul className="space-y-3 mb-6">
              {waterServices.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
            <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:bg-transparent" asChild>
              <Link to="/services#water-sewer">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
