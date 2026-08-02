import { Routes } from '@angular/router';
import { siteReadyGuard } from './core/guards/site-ready.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [siteReadyGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePageComponent),
        pathMatch: 'full'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.page').then((m) => m.AboutPageComponent)
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./pages/services/services.page').then((m) => m.ServicesPageComponent)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.page').then((m) => m.ProjectsPageComponent)
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./pages/gallery/gallery.page').then((m) => m.GalleryPageComponent)
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./pages/blog/blog.page').then((m) => m.BlogPageComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.page').then((m) => m.ContactPageComponent)
      },
      {
        path: 'request-quote',
        loadComponent: () =>
          import('./pages/request-quote/request-quote.page').then((m) => m.RequestQuotePageComponent)
      },
      {
        path: '404',
        loadComponent: () =>
          import('./pages/not-found/not-found.page').then((m) => m.NotFoundPageComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
