import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";
import GoogleMap from "@/components/GoogleMap";
import { useToast } from "@/hooks/use-toast";
import { sendWhatsAppMessage, formatContactMessage } from "@/lib/whatsapp";
import contactHeader from "@/assets/headers/contact-header.jpg";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      project: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const message = formatContactMessage(data);
    const result = await sendWhatsAppMessage(message);

    if (result.success) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["35 10th Street, Voorspoed", "Welkom, Free State, South Africa"],
    },
    {
      icon: MapPin,
      title: "Western Cape Branch",
      details: ["24 Matzikama Street", "Vredendal, Western Cape, 8160"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 57 101 0003", "+27 79 926 5168"],
      links: ["tel:+27571010003", "tel:+27799265168"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kaymotech.com", "quotes@kaymotech.com"],
      links: ["mailto:info@kaymotech.com", "mailto:quotes@kaymotech.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 07:00 - 17:00", "Saturday: 08:00 - 13:00"],
    },
  ];

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your next infrastructure project."
        backgroundImage={contactHeader}
      />

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    item.links ? (
                      <a
                        key={i}
                        href={item.links[i]}
                        className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form and Map Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="heading-lg text-foreground mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input name="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input name="company" placeholder="Your Company" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input name="phone" type="tel" placeholder="+27 XX XXX XXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input name="subject" placeholder="How can we help you?" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="heading-lg text-foreground mb-6">Find Us</h2>
              <p className="text-muted-foreground mb-8">
                Visit our head office in Welkom, Free State, or our Western Cape
                branch in Vredendal.
              </p>
              <GoogleMap />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
