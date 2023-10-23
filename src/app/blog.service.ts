import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 tips to make your house cozier',
      thumbnailUrl: 'https://i.pinimg.com/originals/bf/07/06/bf0706699b03512e1d21028c85393d55.jpg',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 2,
      title: 'Implement hygge into your life',
      thumbnailUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqv537AhvvteM7mgL1wRh-fWFZzWR-NqqyAA&usqp=CAU',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 3,
      title: 'How to style home office',
      thumbnailUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjLZ-26xt4qZsY--8PU-LNYxuaWo_NVaxnw&usqp=CAU',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    },
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | null {
    return this.blogPosts.find((post) => post.id === id) || null;
  }  
}

