import { ImageModel } from '../models/image.model';

export const APP_THEME_STORAGE_KEY = 'ml-builders-theme';
export const APP_CONTACT_PHONE = '+91 96772 52137';
export const APP_CONTACT_PHONE_LINK = 'tel:+919677252137';
export const APP_CONTACT_WHATSAPP_LINK = 'https://wa.me/919677252137';
export const APP_BOOK_VISIT_LINK = '/request-quote';

export const SERVICE_DESCRIPTIONS: Record<string, string> = {
  'Residential Construction': 'End-to-end home building with quality materials and on-time delivery.',
  'Commercial Construction': 'Reliable construction of offices, retail, and commercial spaces.',
  'Interior Fit-Outs': 'Functional and elegant interior design tailored to your space.',
  'Renovation Works': 'Transforming existing spaces with modern upgrades and finishes.'
};

export const PLACEHOLDER_IMAGES: {
  hero: ImageModel;
  heroSecondary: ImageModel;
  service: ImageModel;
  project: ImageModel;
  gallery: ImageModel;
  team: ImageModel;
} = {
  hero: {
    imageUrl: 'https://raw.githubusercontent.com/Pakinbaskerp/Image_cdn/main/MLBuilder_CDN/Images/home1.jpg',
    mobileImage: 'https://raw.githubusercontent.com/Pakinbaskerp/Image_cdn/main/MLBuilder_CDN/Images/home1.jpg',
    tabletImage: 'https://raw.githubusercontent.com/Pakinbaskerp/Image_cdn/main/MLBuilder_CDN/Images/home1.jpg',
    alt: 'ML Builders premium construction hero image',
    title: 'ML Builders Hero',
    loading: 'eager'
  },
  heroSecondary: {
    imageUrl: 'https://raw.githubusercontent.com/Pakinbaskerp/Image_cdn/main/MLBuilder_CDN/Images/home2.jpg',
    mobileImage: 'https://raw.githubusercontent.com/Pakinbaskerp/Image_cdn/main/MLBuilder_CDN/Images/home2.jpg',
    tabletImage: 'https://raw.githubusercontent.com/Pakinbaskerp/Image_cdn/main/MLBuilder_CDN/Images/home2.jpg',
    alt: 'ML Builders construction showcase image',
    title: 'ML Builders Hero Secondary',
    loading: 'eager'
  },
  service: {
    imageUrl: 'assets/images/placeholders/service.webp',
    mobileImage: 'assets/images/placeholders/service.webp',
    tabletImage: 'assets/images/placeholders/service.webp',
    alt: 'Construction service placeholder image',
    title: 'Construction Services',
    loading: 'lazy'
  },
  project: {
    imageUrl: 'assets/images/placeholders/project.webp',
    mobileImage: 'assets/images/placeholders/project.webp',
    tabletImage: 'assets/images/placeholders/project.webp',
    alt: 'Real estate project placeholder image',
    title: 'Project Showcase',
    loading: 'lazy'
  },
  gallery: {
    imageUrl: 'assets/images/placeholders/gallery.webp',
    mobileImage: 'assets/images/placeholders/gallery.webp',
    tabletImage: 'assets/images/placeholders/gallery.webp',
    alt: 'Gallery placeholder image',
    title: 'Gallery Preview',
    loading: 'lazy'
  },
  team: {
    imageUrl: 'assets/images/placeholders/team.webp',
    mobileImage: 'assets/images/placeholders/team.webp',
    tabletImage: 'assets/images/placeholders/team.webp',
    alt: 'Team placeholder image',
    title: 'Team Preview',
    loading: 'lazy'
  }
};
