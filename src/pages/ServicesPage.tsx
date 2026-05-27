import { motion } from "framer-motion";
import { Construction, Droplets, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SmartImage from "@/components/SmartImage";
import roadImage from "@/assets/service_1.jpeg";
import waterImage from "@/assets/waste.jpeg";
import wasteWaterImage from "@/assets/wasted.jpeg";
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

  const wasteWaterServices = [
    {
      title: "Treatment Works Upgrades",
      description: "Civil upgrades for municipal wastewater treatment works to improve capacity and reliability.",
      features: ["Inlet works", "Process structures", "Concrete tanks", "Site infrastructure"],
    },
    {
      title: "Wastewater Treatment Plants",
      description: "Construction support for treatment facilities serving municipal and industrial sanitation needs.",
      features: ["Treatment basins", "Control buildings", "Access roads", "Drainage works"],
    },
    {
      title: "Refurbishment Works",
      description: "Rehabilitation of aging wastewater assets to improve environmental compliance and service delivery.",
      features: ["Structural repairs", "Equipment bases", "Pipework support", "Operational upgrades"],
    },
    {
      title: "Inlet Works Infrastructure",
      description: "Critical inlet works construction and upgrades for improved flow handling and screening.",
      features: ["Channels", "Screens", "Chambers", "Bypass structures"],
    },
    {
      title: "Civil & Mechanical Support",
      description: "Civil works that support mechanical treatment systems, pumps, valves, and plant operations.",
      features: ["Pump bases", "Valve chambers", "Platforms", "Service trenches"],
    },
    {
      title: "Environmental Compliance Works",
      description: "Infrastructure improvements that support sustainable wastewater management and compliance targets.",
      features: ["Containment works", "Effluent structures", "Safe access", "Long-term durability"],
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
        subtitle="Comprehensive civil engineering solutions for road construction, water infrastructure, and wastewater treatment works."
        backgroundImage={servicesHeader}
      />

      {/* Road Construction Section */}
      <section id="road-construction" className="py-14 md:py-20 lg:py-24 scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-4">
                <Construction className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Road Construction</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground mb-4">
                Road Construction
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                We specialize in comprehensive road construction and rehabilitation services,
                delivering durable transport infrastructure solutions for municipalities,
                government departments, and private sector clients across South Africa.
                Our expertise includes new gravel and asphalt road construction,
                road resurfacing, overlays, bitumen seals, concrete roads, pothole
                repairs, patching, and preventative maintenance works.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                Our services also cover earthworks and layerworks, including excavation,
                filling, compaction, and placement of G5–G7 materials, together with
                stormwater drainage systems such as culverts, channels, catch pits,
                and outfall structures. In addition, we undertake kerbing, paving,
                sidewalks, road markings, and ancillary civil works to ensure safe,
                sustainable, and high-quality road infrastructure delivery.
              </p>
              <Button asChild>
                <Link to="/projects?category=road">
                  View Road Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <SmartImage
                src={roadImage}
                alt="Road Construction"
                containerClassName="rounded-xl shadow-card w-full max-h-[360px]"
                className="w-full max-h-[360px] object-cover"
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {roadServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-card transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-1.5">
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
      <section id="water-sewer" className="py-14 md:py-20 lg:py-24 bg-secondary scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <SmartImage
                src={waterImage}
                alt="Water Infrastructure"
                containerClassName="rounded-xl shadow-card w-full max-h-[360px]"
                className="w-full max-h-[360px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-4">
                <Droplets className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Water & Sewer</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground mb-4">
                Water & Sewer Infrastructure
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                We provide comprehensive water and sewer infrastructure solutions designed to
                support sustainable service delivery and community development. Our services
                include water and sewer pipeline installation, bulk pipeline systems, reticulation
                networks, manholes, chambers, pump stations, and associated civil infrastructure works.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                With experience in municipal and infrastructure projects, we undertake the construction,
                maintenance, upgrading, and rehabilitation of water and sewer systems in accordance with
                industry standards and project specifications. Our team is committed to delivering reliable,
                efficient, and high-quality infrastructure solutions that improve sanitation, water distribution,
                and long-term operational performance.
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {waterServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-card transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-1.5">
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

      {/* Waste Water Treatment Section */}
      <section id="waste-water-treatment" className="py-14 md:py-20 lg:py-24 scroll-mt-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-4">
                <Droplets className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Waste Water Treatment Works</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight text-foreground mb-4">
                Waste Water Treatment Works
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                We specialize in the construction, refurbishment, and upgrading of wastewater treatment
                works and water sanitation infrastructure. Our services include civil, mechanical, and
                pipeline infrastructure works associated with treatment plants, pump stations,
                reticulation systems, and bulk sewer networks.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                With a strong focus on quality, environmental compliance, and sustainable infrastructure
                development, we deliver reliable wastewater solutions that improve sanitation services,
                operational efficiency, and long-term community development across South Africa.
              </p>
              <Button asChild>
                <Link to="/projects?category=waste-water-treatment">
                  View Treatment Works Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <SmartImage
                src={wasteWaterImage}
                alt="Waste Water Treatment Works"
                containerClassName="rounded-xl shadow-card w-full max-h-[360px]"
                className="w-full max-h-[360px] object-cover"
              />
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {wasteWaterServices.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-card transition-shadow"
              >
                <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-1.5">
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
      <section className="py-14 md:py-20 lg:py-24 bg-accent text-accent-foreground">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-accent-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-accent-foreground/80 text-base md:text-lg mb-7 max-w-2xl mx-auto">
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
