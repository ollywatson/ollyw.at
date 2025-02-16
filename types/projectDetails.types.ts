// types.ts

// Interface for individual page data items (e.g., multiBasket, deliveroPlus, basketQuickView)
export interface PageDataItem {
  description1: string; // Main description
  imgTitle1: string; // Image source for the first image
  imgCaption1: string; // Caption for the first image
  heading1: string; // Heading for the first section
  description2?: string; // Optional second description
  imgTitle2?: string; // Optional second image source
  imgCaption2?: string; // Optional second image caption
  heading2?: string; // Optional second heading
  description3?: string; // Optional third description
}

// Interface for the pageData object (contains multiBasket, deliveroPlus, basketQuickView)
export interface PageData {
  multiBasket: PageDataItem;
  deliveroPlus: PageDataItem;
  basketQuickView: PageDataItem;
}

// Interface for the Project object
export interface Project {
  id: number; // Unique identifier for the project
  name: string; // Name of the project
  role: string; // Role in the project
  year: string; // Year or duration of the project
  link: string; // Link to the project
  icon: string; // Path to the project icon
  color: string; // Color associated with the project
  hasCases: boolean; // Whether the project has case studies
  slug: string; // Slug for the project URL
  pageData: PageData[]; // Array of page data objects
}