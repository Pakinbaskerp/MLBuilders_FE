export interface ImageModel {
  imageUrl: string;
  mobileImage?: string;
  tabletImage?: string;
  alt: string;
  title?: string;
  loading?: 'lazy' | 'eager';
}
