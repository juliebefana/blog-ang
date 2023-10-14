import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model'; // Import the interface

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogPosts: BlogPost[] = [];

}
