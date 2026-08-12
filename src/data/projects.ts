import type { Project } from "@/types/project";

const imageBase = "https://images.unsplash.com/photo";

export const projects: Project[] = [];

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

export const lifestyleImages = [
  `${imageBase}-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82`,
  `${imageBase}-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82`,
  `${imageBase}-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=82`,
  `${imageBase}-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=82`,
  `${imageBase}-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=82`,
  `${imageBase}-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=82`
];
