import { Component } from '@angular/core';
import { ImageModel } from '../../core/models/image.model';
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
  protected readonly posts: BlogPost[] = blogPostsData;
  protected selectedPost: BlogPost = this.posts[0];

  protected selectPost(post: BlogPost): void {
    this.selectedPost = post;
  }

  protected toImage(post: BlogPost): ImageModel {
    return { imageUrl: post.image.imageUrl, alt: post.image.alt, loading: 'lazy' };
  }
}
