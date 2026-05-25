import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "CIDB 4CE & 4ME PE",
    "SANRAL Compliant",
    "B-BBEE Compliant",
  ];

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="heading-lg text-foreground mt-3 mb-6">
              From Roads to Sewer Systems. We deliver.
            </h2>
            <p className="body-lg mb-6">
              Kaymo Tech is a South African civil engineering contractor
              delivering reliable road construction, rehabilitation,
              and water & sewer infrastructure solutions across South Africa.
            </p>
            <p className="text-muted-foreground mb-8">
              Built on technical expertise, compliance, and quality
              workmanship, we partner with public and private sector
              clients to deliver infrastructure that lasts.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
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
                <p className="text-accent-foreground/80 mt-2">
                  CIDB Grade Mechanical
                </p>
              </div>
              <div className="col-span-2 bg-primary text-primary-foreground rounded-xl p-6 md:p-8 text-center">
                <span className="text-3xl md:text-4xl font-bold">2020</span>
                <p className="text-primary-foreground/90 mt-2">
                  Established in Welkom, Free State
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
