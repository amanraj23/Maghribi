export type Project = {
  name: string;
  slug: string;
  location: string;
  category: string;
  approvalStatus: string;
  plotSizes: string[];
  description: string;
  story: string;
  image: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
  seoDescription: string;
  startingPrice?: string;
};
