import {
  Shield,
  Target,
  Clock,
  Users,
  Truck,
  FileCheck,
} from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Zero harm philosophy aligned with OHS Act requirements. Every project includes comprehensive Health & Safety Files and risk assessments.",
    },
    {
      icon: Target,
      title: "Quality Driven",
      description:
        "Strict adherence to drawings, specifications, and QA processes. We meet CIDB, SANRAL, and SANS standards on every project.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Realistic programming and efficient resource allocation ensures we meet deadlines without compromising quality.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Local labour utilisation and skills transfer. We're committed to empowering the communities where we work.",
    },
    {
      icon: Truck,
      title: "Reliable Plant & Equipment",
      description:
        "Tipper trucks, water carts, rollers, compactors, TLBs, and small plant ready for deployment on your project.",
    },
    {
      icon: FileCheck,
      title: "Full Compliance",
      description:
        "CIDB registered, SARS compliant, COIDA registered, CSD registered, and B-BBEE compliant contractor.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-accent text-accent-foreground">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-accent-foreground mt-3 mb-4">
            Built Different. Built to Last.
          </h2>
          <p className="text-accent-foreground/70 text-lg">
            We combine technical capability with a strong compliance culture to
            deliver infrastructure that serves communities for generations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-accent-foreground/5 border border-accent-foreground/10 rounded-xl p-6 md:p-8 hover:bg-accent-foreground/10 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-lg mb-4">
                <reason.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="heading-md text-accent-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-accent-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
