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
    title: '5 tips to make your house cozier',
    thumbnailUrl: 'https://i.pinimg.com/originals/bf/07/06/bf0706699b03512e1d21028c85393d55.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  },
  {
    id: 2, // Unique identifier
    title: 'Implement hygge into your life',
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqv537AhvvteM7mgL1wRh-fWFZzWR-NqqyAA&usqp=CAU',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  },
  {
    id: 3, // Unique identifier
    title: 'How to style home office',
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjLZ-26xt4qZsY--8PU-LNYxuaWo_NVaxnw&usqp=CAU',
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