import { ImageModel } from '../models/image.model';
import imagePaths from '../../../assets/data/image-paths.json';

export const IMAGE_PATHS = imagePaths;

export const APP_THEME_STORAGE_KEY = 'ml-builders-theme';
export const APP_CONTACT_PHONE = '+91 96772 52137';
export const APP_CONTACT_PHONE_LINK = 'tel:+919677252137';
export const APP_CONTACT_PHONE_SECONDARY = '+91 99410 33011';
export const APP_CONTACT_PHONE_SECONDARY_LINK = 'tel:+919941033011';
export const APP_CONTACT_WHATSAPP_LINK = 'https://wa.me/919677252137';
export const APP_CONTACT_EMAIL = 'contact@mlbuilders.in';
export const APP_CONTACT_EMAIL_LINK = 'mailto:contact@mlbuilders.in';
export const APP_CONTACT_WEBSITE = 'www.mlbuilders.in';
export const APP_CONTACT_WEBSITE_LINK = 'https://www.mlbuilders.in';
export const APP_CONTACT_INSTAGRAM = '@ml._.builders';
export const APP_CONTACT_INSTAGRAM_LINK = 'https://instagram.com/ml._.builders';
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
    ...imagePaths.hero,
    alt: 'ML Builders premium construction hero image',
    title: 'ML Builders Hero',
    loading: 'eager'
  },
  heroSecondary: {
    ...imagePaths.heroSecondary,
    alt: 'ML Builders construction showcase image',
    title: 'ML Builders Hero Secondary',
    loading: 'eager'
  },
  service: {
    ...imagePaths.placeholders.service,
    alt: 'Construction service placeholder image',
    title: 'Construction Services',
    loading: 'lazy'
  },
  project: {
    ...imagePaths.placeholders.project,
    alt: 'Real estate project placeholder image',
    title: 'Project Showcase',
    loading: 'lazy'
  },
  gallery: {
    ...imagePaths.placeholders.gallery,
    alt: 'Gallery placeholder image',
    title: 'Gallery Preview',
    loading: 'lazy'
  },
  team: {
    ...imagePaths.placeholders.team,
    alt: 'Team placeholder image',
    title: 'Team Preview',
    loading: 'lazy'
  }
};

export const ABOUT_IMAGES: {
  mission: ImageModel;
} = {
  mission: {
    ...imagePaths.about.mission,
    alt: 'ML Builders mission illustrative image',
    title: 'Our Mission',
    loading: 'lazy'
  }
};

export const SERVICE_IMAGES: Record<string, ImageModel> = Object.fromEntries(
  Object.entries(imagePaths.services).map(([label, image]) => [
    label,
    { ...image, alt: `${label} service image`, loading: 'lazy' } satisfies ImageModel
  ])
);
