import { Component } from '@angular/core';
import { BlogService, BlogPost } from '../../services/blog.service';

/**
 * Represents the owner component responsible for creating new blog posts.
 */
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
 
  /**
   * Creates an instance of the OwnerComponent.
   * @constructor
   * @param {BlogService} blogService - The service responsible for managing blog-related operations.
   */
  constructor(private blogService: BlogService) {}

  /**
   * Handles the creation of a new blog post.
   * Adds the new blog post to the blog service.
   * Resets the newBlogPost object for a fresh creation.
   * @returns {void}
   */
  createNewBlogPost() {

    this.blogService.addBlogPost(this.newBlogPost);

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
