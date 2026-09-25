import { Component, inject } from '@angular/core';
import { ImageModel } from '../../core/models/image.model';
import { SeoService } from '../../core/services/seo.service';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { ImageCardComponent } from '../../shared/components/image-card/image-card.component';
import blogPostsData from '../../../assets/data/blog-posts.json';

interface BlogPost {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: { imageUrl: string; alt: string };
  content: string[];
}

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [PageLayoutComponent, ImageCardComponent],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss'
})
export class BlogPageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      {
        title: 'Insights & Updates',
        description:
          'Construction tips, renovation guides, and interior design trends from the ML Builders team, serving Chennai, Kancheepuram, and Tamil Nadu.',
        keywords: 'construction blog, renovation tips, interior design trends, ML Builders insights'
      },
      '/blog'
    );
  }

  protected readonly posts: BlogPost[] = blogPostsData;
  protected selectedPost: BlogPost = this.posts[0];

  protected selectPost(post: BlogPost): void {
    this.selectedPost = post;
  }

  protected toImage(post: BlogPost): ImageModel {
    return { imageUrl: post.image.imageUrl, alt: post.image.alt, loading: 'lazy' };
  }
}
