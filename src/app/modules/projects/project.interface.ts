export type TProject = {
  name: string;
  tagline: string;
  overview: string;
  duration: string;
  features: string[];
  frontendRepo?: string;
  backendRepo?: string;
  liveLink: string;
  overviewVideo?: string;
  images: string[];
  technologyNames: string[];
  technologyLogos: string[];
  category: string;      // Frontend | Backend | Full Stack 
  projectType: string;   // Personal | Company
};
