import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../blog-post.model';
import { BlogService } from '../../services/blog.service';

/**
 * Component for displaying a single blog post.
 */

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  selectedPost: BlogPost | null=null;
  newComment: string = '';

  /**
  * Constructor for SinglePostComponent.
  * @param route - The activated route service to access route parameters.
  * @param blogService - The blog service for fetching and updating blog data.
  */
  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  /**
  * Lifecycle hook called after Angular has initialized all data-bound properties.
  */
  ngOnInit() {
    const postId = +this.route.snapshot.params['id'];

    this.selectedPost = this.blogService.getBlogPostById(postId);

    if (!this.selectedPost) {
     // Handle the case where the selected post is not found.
    } else {
      // Handle the case where the selected post is found.
    }
  }

  /**
   * Adds a new comment to the selected blog post.
   */
  addComment() {
    if (this.selectedPost) { // Checking if selectedPost is not null
      if (this.newComment) {
        this.selectedPost.comments.push(this.newComment);
        this.newComment = ''; // Clear the input field
      }
    }
  }

  /**
   * Increases the like count of the selected blog post.
   */
  likePost() {
    if (this.selectedPost) {
      this.selectedPost.likes++;
    }
  }
  
   /**
   * Increases the dislike count of the selected blog post.
   */
  dislikePost() {
    if (this.selectedPost) {
      this.selectedPost.dislikes++;
    }
  }
  
}  

