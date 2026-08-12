import type { Project } from "@/types/project";

const imageBase =
  "https://images.unsplash.com/photo";

export const projects: Project[] = [
  {
    name: "Maghribi Green Hills",
    slug: "green-hills",
    location: "Gauribidanur",
    category: "Villa Plots",
    approvalStatus: "Approval details to be updated",
    plotSizes: ["30 x 40", "30 x 50", "40 x 60"],
    startingPrice: "Price on request",
    description: "A composed villa plot community planned around clean roads, green setbacks and everyday convenience.",
    story:
      "Green Hills is shaped for families who want the calm of plotted living with the confidence of structured documentation and future-ready infrastructure.",
    image: `${imageBase}-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85`,
    gallery: [
      `${imageBase}-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82`,
      `${imageBase}-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82`,
      `${imageBase}-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=82`
    ],
    amenities: ["Internal roads", "Street lighting", "Green spaces", "Water connection", "Drainage"],
    highlights: ["Planned villa plots", "Premium approach road", "Documentation support", "Site visit available"],
    seoDescription: "Explore Maghribi Green Hills, a premium villa plot community with planned infrastructure."
  },
  {
    name: "Maghribi Emirates County",
    slug: "emirates-county",
    location: "Location to be updated",
    category: "Investment Plots",
    approvalStatus: "Approval details to be updated",
    plotSizes: ["Custom plot sizes"],
    startingPrice: "Price on request",
    description: "Investment-oriented plots with a premium planning language and a clear path to ownership.",
    story:
      "Emirates County is designed for buyers seeking long-term land value, transparent process and an elevated first impression.",
    image: `${imageBase}-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85`,
    gallery: [
      `${imageBase}-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=82`,
      `${imageBase}-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=82`,
      `${imageBase}-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=82`
    ],
    amenities: ["Clear layout planning", "Road access", "Power provision", "Landscaped pockets", "Registration support"],
    highlights: ["Investment plot focus", "Configurable inventory", "Advisor-led guidance", "Project details on request"],
    seoDescription: "Discover Maghribi Emirates County, a premium plotted development for investment-focused buyers."
  },
  {
    name: "Maghribi Palm Estate",
    slug: "palm-estate",
    location: "Location to be updated",
    category: "Residential Plots",
    approvalStatus: "Approval details to be updated",
    plotSizes: ["30 x 40", "40 x 60"],
    startingPrice: "Price on request",
    description: "Residential plots planned for comfort, natural light, cleaner streetscapes and easy future buildability.",
    story:
      "Palm Estate brings a quiet luxury lens to plotted development, balancing privacy, usability and long-term neighbourhood value.",
    image: `${imageBase}-1604014237800-1c9102c219da?auto=format&fit=crop&w=1600&q=85`,
    gallery: [
      `${imageBase}-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=82`,
      `${imageBase}-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=82`,
      `${imageBase}-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=82`
    ],
    amenities: ["Family park", "Jogging track", "Water provision", "Security planning", "Rainwater harvesting"],
    highlights: ["Residential layout", "Lifestyle amenities", "Premium planning", "Guided site visits"],
    seoDescription: "Learn about Maghribi Palm Estate, a premium residential plot project with lifestyle amenities."
  }
];

export const featuredProject = projects[0];

export const categories = [
  {
    title: "Residential Plots",
    description: "Well-planned plots for families who want flexibility, ownership and neighbourhood value.",
    image: `${imageBase}-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82`
  },
  {
    title: "Villa Plots",
    description: "Premium parcels shaped around privacy, wider roads and elevated future homes.",
    image: `${imageBase}-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=82`
  },
  {
    title: "Investment Plots",
    description: "Land opportunities selected for connectivity, clarity and long-term potential.",
    image: `${imageBase}-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82`
  }
];
