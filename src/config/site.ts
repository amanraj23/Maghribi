export const siteConfig = {
  name: "Maghribi Group of Companies",
  shortName: "Maghribi",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://maghribigroups.com",
  description:
    "Premium residential, villa and investment plots planned for better living, cleaner documentation and long-term value.",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 00000 00000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "910000000000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@maghribigroups.com",
  address: "Office address to be updated, India",
  businessHours: "Monday to Saturday, 10:00 AM - 6:30 PM",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/"
  }
};

export const whatsappHref = (message = "I would like to know more about Maghribi projects.") =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
