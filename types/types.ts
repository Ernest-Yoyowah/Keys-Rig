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
