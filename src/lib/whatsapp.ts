const WHATSAPP_PHONE = "+27799265168";
const WHATSAPP_API_KEY = "9232401";

interface WhatsAppResult {
  success: boolean;
  message: string;
}

// Sanitize text by removing special characters and keeping only alphanumeric, spaces, and basic punctuation
const sanitizeText = (text: string): string => {
  return text
    .replace(/[^\w\s.,!?@-]/g, ' ') // Replace special chars with space
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim();
};

export const sendWhatsAppMessage = async (message: string): Promise<WhatsAppResult> => {
  try {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${encodedMessage}&apikey=${WHATSAPP_API_KEY}`;

    const response = await fetch(url, {
      method: "GET",
      mode: "no-cors", // CallMeBot doesn't support CORS, so we use no-cors mode
    });

    // With no-cors mode, we can't read the response status
    // The request is sent successfully if no error is thrown
    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("WhatsApp API error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
};

export const formatQuoteMessage = (data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  location: string;
  message: string;
}): string => {
  const name = sanitizeText(data.name);
  const company = sanitizeText(data.company || "Not provided");
  const email = sanitizeText(data.email);
  const phone = sanitizeText(data.phone || "Not provided");
  const projectType = sanitizeText(data.projectType);
  const budget = sanitizeText(data.budget || "Not specified");
  const timeline = sanitizeText(data.timeline || "Not specified");
  const location = sanitizeText(data.location);
  const message = sanitizeText(data.message);

  return `*NEW QUOTE REQUEST* from Kaymo Tech Website. *Name* ${name}. *Company* ${company}. *Email* ${email}. *Phone* ${phone}. *Project Type* ${projectType}. *Budget Range* ${budget}. *Timeline* ${timeline}. *Location* ${location}. *Project Description* ${message}.`;
};

export const formatContactMessage = (data: {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  project?: string;
  message: string;
}): string => {
  const name = sanitizeText(data.name);
  const company = sanitizeText(data.company || "Not provided");
  const email = sanitizeText(data.email);
  const phone = sanitizeText(data.phone || "Not provided");
  const project = sanitizeText(data.project || "Not specified");
  const message = sanitizeText(data.message);

  return `*NEW CONTACT MESSAGE* from Kaymo Tech Website. *From* ${name}. *Company* ${company}. *Email* ${email}. *Phone* ${phone}. *Project Type* ${project}. *Message* ${message}.`;
};
