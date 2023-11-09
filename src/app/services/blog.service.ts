import { Injectable } from '@angular/core';

// Defining the structure of a blog post
export interface BlogPost {
  id: number;
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
}

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
      comments: [
        'Great tips! I tried them and my house feels much cozier now.',
        'I love these ideas. Thanks for sharing!',
      ],
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
      comments: [
        'Great tips! I tried them and my house feels much cozier now.',
        'I love these ideas. Thanks for sharing!',
      ],
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
      comments: [
        'Great tips! I tried them and my house feels much cozier now.',
        'I love these ideas. Thanks for sharing!',
      ],
    },
  ];
    // Hardcoded posts here


  constructor() {
    this.loadBlogPostsFromLocalStorage(); // Load posts from local storage during initialization
  }

  // Function to load posts from local storage
  private loadBlogPostsFromLocalStorage() {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      this.blogPosts = JSON.parse(storedPosts);
    }
  }

  // Function to save posts to local storage
  private saveBlogPostsToLocalStorage() {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | null {
    return this.blogPosts.find((post) => post.id === id) || null;
  }

  // Modify the addBlogPost method to save posts to local storage
  addBlogPost(blogPost: BlogPost) {
    // Generate a unique ID for the new post
    blogPost.id = this.blogPosts.length + 1;

    this.blogPosts.push(blogPost);

    // After adding the post, save the updated array to local storage
    this.saveBlogPostsToLocalStorage();
  }
}


