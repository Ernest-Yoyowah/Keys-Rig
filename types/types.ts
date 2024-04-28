export type keysRigComponents = {
  title: string;
  href: string;
  description: string;
}[];

export type instrumentMarketComponents = {
  title: string;
  href: string;
  description: string;
}[];

export interface ExpansionItemProps {
  title: string;
  description: string;
  youtubeLink: string;
  imageUrl: string;
}

export interface ProductFinderContentProps {
  title: string;
  productName: string;
  description: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
}

export interface Video {
  url: string;
  name: string;
}

export interface SectionProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}
