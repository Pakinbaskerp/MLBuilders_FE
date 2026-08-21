import { Component } from '@angular/core';
import { ImageModel } from '../../core/models/image.model';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import projectsData from '../../../assets/data/projects.json';

interface ProjectEntry {
  imageUrl: string;
  alt: string;
  title: string;
  category: string;
  location: string;
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [PageLayoutComponent, ProjectCardComponent],
  templateUrl: './projects.page.html',
  styleUrl: './projects.page.scss'
})
export class ProjectsPageComponent {
  protected readonly projects = (projectsData as ProjectEntry[]).map((item) => ({
    title: item.title,
    category: item.category,
    location: item.location,
    image: { imageUrl: item.imageUrl, alt: item.alt, loading: 'lazy' } satisfies ImageModel
  }));
}
