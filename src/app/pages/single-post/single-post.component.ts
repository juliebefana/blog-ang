import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../blog-post.model';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  selectedPost: BlogPost | null=null;
  newComment: string = '';

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit() {
    const postId = +this.route.snapshot.params['id'];

    // Log that you're trying to retrieve the post by ID
    console.log(`Attempting to retrieve post with ID ${postId}`);

    this.selectedPost = this.blogService.getBlogPostById(postId);

    if (!this.selectedPost) {
      // Log an error message when the post is not found
      console.error(`Post with ID ${postId} not found.`);
    } else {
      // Log the retrieved post
      console.log('Retrieved post:', this.selectedPost);
    }
  }

  addComment() {
    if (this.selectedPost) { // Check if selectedPost is not null
      if (this.newComment) {
        this.selectedPost.comments.push(this.newComment);
        this.newComment = ''; // Clear the input field
      }
    }
  }

  likePost() {
    if (this.selectedPost) {
      this.selectedPost.likes++;
    }
  }
  
  dislikePost() {
    if (this.selectedPost) {
      this.selectedPost.dislikes++;
    }
  }
  
}  

