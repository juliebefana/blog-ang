import { Component } from '@angular/core';
import { BlogPost } from './blog-post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  perspective: string = 'user'; // or 'owner', depending on your default perspective

  // Define an array of mock blog posts
  blogPosts: BlogPost[] = [
    {
      title: 'Sample Post 1',
      thumbnailUrl: 'path-to-image-1.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
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


