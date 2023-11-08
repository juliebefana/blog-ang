import { Component } from '@angular/core';
import { BlogService, BlogPost } from '../blog.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  newBlogPost: BlogPost = {
    id: 0,
    title: '',
    thumbnailUrl: '',
    body: '',
    creationDate: new Date(),
    likes: 0,
    dislikes: 0,
    comments: [],
  };

  constructor(private blogService: BlogService) {}

  createNewBlogPost() {
    // Handle creating a new blog post here
    this.blogService.addBlogPost(this.newBlogPost);

    // Reset the form and the new blog post object
    this.newBlogPost = {
      id: 0, 
      title: '',
      thumbnailUrl: '',
      body: '',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
  }
}
