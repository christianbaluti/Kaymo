import { motion } from "framer-motion";
import { Construction, Droplets, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import roadImage from "@/assets/road4.jpeg";
import waterImage from "@/assets/water2.jpg";
import servicesHeader from "@/assets/headers/services-header.jpg";

const ServicesPage = () => {
  const roadServices = [
    {
      title: "New Road Construction",
      description: "Complete construction of gravel and asphalt roads from greenfield to completion.",
      features: ["Gravel roads", "Asphalt surfacing", "Bitumen seals", "Concrete roads"],
    },
    {
      title: "Road Rehabilitation",
      description: "Restoration and improvement of existing road infrastructure to extend service life.",
      features: ["Resurfacing", "Overlay works", "Structural repairs", "Surface treatments"],
    },
    {
      title: "Pothole Repairs",
      description: "Rapid response pothole repair services using quality materials and techniques.",
      features: ["Hot mix patching", "Cold mix repairs", "Edge repairs", "Preventive maintenance"],
    },
    {
      title: "Earthworks & Layerworks",
      description: "Comprehensive ground preparation including excavation, filling, and compaction.",
      features: ["G5-G7 materials", "Cut and fill", "Compaction", "Formation levels"],
    },
    {
      title: "Stormwater Drainage",
      description: "Design and construction of effective stormwater management systems.",
      features: ["Culverts", "Channels", "Catch pits", "Outfall structures"],
    },
    {
      title: "Kerbing & Paving",
      description: "Installation of kerbs, sidewalks, and paved surfaces for pedestrian areas.",
      features: ["Barrier kerbs", "Mountable kerbs", "Paving blocks", "Sidewalk construction"],
    },
  ];

  const waterServices = [
    {
      title: "Bulk Water Pipelines",
      description: "Installation of large-diameter pipelines for municipal water supply networks.",
      features: ["Steel pipes", "uPVC pipes", "HDPE pipes", "Ductile iron"],
    },
    {
      title: "Reticulation Networks",
      description: "Distribution pipeline networks to deliver water to individual properties.",
      features: ["House connections", "Meter installations", "Valve chambers", "Fire hydrants"],
    },
    {
      title: "Sewer Pipelines",
      description: "Installation and upgrades of gravity and pressure sewer systems.",
      features: ["Gravity sewers", "Rising mains", "Manholes", "Connections"],
    },
    {
      title: "Manhole Construction",
      description: "Construction and rehabilitation of manholes and inspection chambers.",
      features: ["Precast manholes", "In-situ construction", "Rehabilitation", "Covers and frames"],
    },
    {
      title: "Pump Station Civil Works",
      description: "Complete civil construction for water and wastewater pump stations.",
      features: ["Foundations", "Wet wells", "Valve chambers", "Site works"],
    },
    {
      title: "Sump Cleaning",
      description: "Maintenance services including sump cleaning and sludge removal.",
      features: ["Vacuum tankers", "Sludge disposal", "Cleaning services", "Maintenance"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive civil engineering solutions for road construction and water infrastructure projects."
        backgroundImage={servicesHeader}
      />

      {/* Road Construction Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Construction className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Road Construction</span>
              </div>
              <h2 className="heading-lg text-foreground mb-6">
                Road Construction & Rehabilitation
              </h2>
              <p className="body-lg mb-6">
                From new road construction to rehabilitation and maintenance, we deliver
                quality road infrastructure that serves communities for decades. Our
                experienced team handles projects of all sizes, from township roads to
                provincial highways.
              </p>
              <Button asChild>
                <Link to="/projects?category=road">
                  View Road Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={roadImage}
                alt="Road Construction"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {roadServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow"
              >
                <h3 className="heading-md text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Water Infrastructure Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src={waterImage}
                alt="Water Infrastructure"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Droplets className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Water & Sewer</span>
              </div>
              <h2 className="heading-lg text-foreground mb-6">
                Water & Sewer Infrastructure
              </h2>
              <p className="body-lg mb-6">
                We specialize in the installation and rehabilitation of water and sewer
                infrastructure, from bulk pipelines to reticulation networks. Our work
                ensures reliable water supply and sanitation for communities across
                South Africa.
              </p>
              <Button asChild>
                <Link to="/projects?category=water">
                  View Water Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {waterServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow"
              >
                <h3 className="heading-md text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-wide text-center">
          <h2 className="heading-lg text-accent-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your civil engineering requirements and get a
            competitive quote from our experienced team.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
