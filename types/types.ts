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

export type ExpansionItemProps = {
  title: string;
  description: string;
  videoId: string;
  youtubeTitle: string;
};

export type ProductFinderContentProps = {
  title: string;
  productName: string;
  description: string;
  price: string;
  discountedPrice: string;
  imageUrl: string;
};

export type Video = {
  url: string;
  name: string;
};

export type SectionProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export type YoutubeEmbedProps = {
  videoId: string;
  title?: string;
};

export type PageHeaderProps = {
  imageUrl: string;
  altText: string;
  mainHeading: string;
  subHeading: string;
};
