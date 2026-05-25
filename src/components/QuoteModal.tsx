import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { sendWhatsAppMessage, formatQuoteMessage } from "@/lib/whatsapp";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = formatQuoteMessage(formData);
    const result = await sendWhatsAppMessage(message);

    if (result.success) {
      toast({
        title: "Quote request sent!",
        description: "Your request has been sent. We'll get back to you soon.",
      });
      onClose();
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        location: "",
        message: "",
      });
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MessageCircle className="h-5 w-5 text-primary" />
            Request a Quote
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone
              </label>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 XX XXX XXXX"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Type *
              </label>
              <Select
                value={formData.projectType}
                onValueChange={(value) => handleSelectChange("projectType", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Road Construction">Road Construction</SelectItem>
                  <SelectItem value="Road Rehabilitation">Road Rehabilitation</SelectItem>
                  <SelectItem value="Water Pipeline">Water Pipeline</SelectItem>
                  <SelectItem value="Sewer Infrastructure">Sewer Infrastructure</SelectItem>
                  <SelectItem value="Stormwater Drainage">Stormwater Drainage</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Budget Range
              </label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleSelectChange("budget", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under R500,000">Under R500,000</SelectItem>
                  <SelectItem value="R500,000 - R1M">R500,000 - R1M</SelectItem>
                  <SelectItem value="R1M - R5M">R1M - R5M</SelectItem>
                  <SelectItem value="R5M - R10M">R5M - R10M</SelectItem>
                  <SelectItem value="Over R10M">Over R10M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Timeline
              </label>
              <Select
                value={formData.timeline}
                onValueChange={(value) => handleSelectChange("timeline", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</SelectItem>
                  <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                  <SelectItem value="Within 3 months">Within 3 months</SelectItem>
                  <SelectItem value="Within 6 months">Within 6 months</SelectItem>
                  <SelectItem value="Flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Location *
              </label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Province"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Project Details *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project requirements, scope of work, any specific specifications..."
              rows={4}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Quote Request
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;