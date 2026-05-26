import { motion } from "framer-motion";
import { CheckCircle, Shield, Target, Users, Award, Truck, Download, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import aboutHeader from "@/assets/headers/about-header.jpg";

const AboutPage = () => {
  const highlights = [
    "CIDB Registered: 4CE 4ME PE",
    "Progressing to 6CE 6ME PE",
    "SARS Tax Compliant",
    "COIDA Registered",
    "CSD Registered",
    "B-BBEE Compliant",
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "Zero harm philosophy aligned with OHS Act requirements. Every project includes comprehensive Health & Safety Files.",
    },
    {
      icon: Target,
      title: "Quality",
      description: "Strict adherence to drawings, specifications, and QA processes meeting CIDB, SANRAL, and SANS standards.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Local labour utilisation and skills transfer, empowering the communities where we work.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering projects on time, within budget, and exceeding client expectations.",
    },
  ];

  const equipment = [
    "Tipper Trucks (Various capacities)",
    "Water Carts (5,000L - 10,000L)",
    "Smooth Drum Rollers",
    "Padfoot Compactors",
    "TLB Machines",
    "Excavators",
    "Graders",
    "Bob Cats / Skid Steers",
    "Plate Compactors",
    "Concrete Equipment",
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
        title="About Kaymo Tech"
        subtitle="Built on a foundation of technical competence, regulatory compliance, and community upliftment."
        backgroundImage={aboutHeader}
      />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="heading-lg text-foreground mt-3 mb-6">
                Building Infrastructure That Creates Lasting Impact Since 2020
              </h2>
              <p className="body-lg mb-6">
                Established in 2020, Kaymo Tech is a proudly South African civil
                engineering company specializing in road construction, water &
                sewer infrastructure, and wastewater treatment works. As part of
                Kaymo Group, we are committed to delivering infrastructure solutions
                that improve communities, support economic growth, and create long-term value.
              </p>
              <p className="text-muted-foreground mb-6">
                Backed by an experienced management team, skilled workforce, and reliable
                plant, we deliver quality infrastructure projects with professionalism,
                safety, and precision. Our operations are guided by CIDB, SANRAL, and
                relevant SANS specifications, ensuring every project meets the highest
                industry standards.
              </p>
              <p className="text-muted-foreground">
                From roads and stormwater systems to sewer networks and wastewater
                treatment infrastructure, Kaymo Tech continues to grow as a trusted
                infrastructure partner across South Africa — driven by excellence,
                innovation, and a passion for building the future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-card">
                  <span className="text-4xl md:text-5xl font-bold text-accent-foreground">
                    4CE
                  </span>
                  <p className="text-accent-foreground/80 mt-2">CIDB Grade Civil</p>
                </div>
                <div className="stat-card">
                  <span className="text-4xl md:text-5xl font-bold text-accent-foreground">
                    4ME
                  </span>
                  <p className="text-accent-foreground/80 mt-2">CIDB Grade Mechanical</p>
                </div>
                <div className="col-span-2 bg-primary text-primary-foreground rounded-xl p-6 md:p-8 text-center">
                  <span className="text-3xl md:text-4xl font-bold">2020</span>
                  <p className="text-primary-foreground/90 mt-2">
                    Established in Welkom, Free State
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Compliance
            </span>
            <h2 className="heading-lg text-foreground mt-3 mb-4">
              Fully Compliant & Certified
            </h2>
            <p className="body-lg">
              We maintain all necessary registrations and certifications to operate
              as a professional civil engineering contractor.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="heading-lg text-foreground mt-3 mb-4">
              What Drives Us
            </h2>
            <p className="body-lg">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="heading-md text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent-foreground/10 rounded-full px-4 py-2 mb-4">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Our Fleet</span>
              </div>
              <h2 className="heading-lg text-accent-foreground mb-6">
                Plant & Equipment
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Our comprehensive fleet of construction equipment ensures we can
                mobilize quickly and execute projects efficiently. All equipment
                is well-maintained and operated by trained personnel.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {equipment.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-accent-foreground/5 border border-accent-foreground/10 rounded-lg p-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-accent-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Company Profile
            </span>
            <h2 className="heading-lg text-foreground mt-3 mb-4">
              Download Our Profile
            </h2>
            <p className="body-lg">
              Learn more about Kaymo Tech, our capabilities, and our track record
              by downloading our comprehensive company profile.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/Kaymo-Tech-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <FileText className="h-5 w-5" />
              View Company Profile
            </a>
            <a
              href="/Kaymo-Tech-Profile.pdf"
              download="Kaymo Tech Profile.pdf"
              className="inline-flex items-center gap-3 bg-secondary text-foreground px-6 py-4 rounded-lg font-semibold hover:bg-secondary/80 transition-colors border border-border"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
