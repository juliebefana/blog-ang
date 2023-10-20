import { Component } from '@angular/core';
import { BlogPost } from '../blog-post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  perspective: string = 'user'; 


blogPosts: BlogPost[] = [
  {
    id: 1, // Unique identifier
    title: 'Sample Post 1',
    thumbnailUrl: 'path-to-image-1.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  },
  {
    id: 2, // Unique identifier
    title: 'Sample Post 2',
    thumbnailUrl: 'path-to-image-2.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  },
];


  togglePerspective() {
    this.perspective = this.perspective === 'user' ? 'owner' : 'user';
  }
}