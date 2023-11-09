import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../blog-post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  perspective: string = 'user';
  blogPosts: BlogPost[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogPosts = this.blogService.getBlogPosts();
  }

  togglePerspective() {
    this.perspective = this.perspective === 'user' ? 'owner' : 'user';
  }
}
