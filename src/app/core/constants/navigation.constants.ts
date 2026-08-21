import { NavigationLink } from '../models/navigation.model';

export const HEADER_NAV_LINKS: NavigationLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  // { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

export const FOOTER_QUICK_LINKS: NavigationLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

export const FOOTER_SERVICE_LINKS: NavigationLink[] = [
  { label: 'Residential Construction', path: '/services' },
  { label: 'Commercial Construction', path: '/services' },
  { label: 'Interior Fit-Outs', path: '/services' },
  { label: 'Renovation Works', path: '/services' }
];
