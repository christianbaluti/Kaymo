import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendWhatsAppMessage, formatContactMessage } from "@/lib/whatsapp";

const Contact = () => {
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
      project: formData.get("project") as string,
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

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="heading-lg text-foreground mt-3 mb-6">
              Partner With Kaymo Tech
            </h2>
            <p className="body-lg mb-8">
              Ready to build infrastructure that lasts? Contact our
              team to discuss your next project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">
                    <h5 className="text-foreground mb-1">Head Office</h5>
                    35 10th Street, Voorspoed <br/>
                    Welkom, Free State, South Africa
                    <br />
                    <br />
                    <h5 className="text-foreground mb-1">Western Cape Branch</h5>
                    24 Matzikama Street, Vredendal,
                    <br/>
                    Western Cape, 8160 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+27571010003"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +27 57 101 0003
                  </a>
                  <a
                    href="tel:+27799265168"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    +27 79 926 5168
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:info@kaymotech.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@kaymotech.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="heading-md text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Type
                </label>
                <Input
                  id="project"
                  name="project"
                  placeholder="e.g., Road Construction, Water Pipeline"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
