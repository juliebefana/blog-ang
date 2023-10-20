import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog-post.model'; // Import your BlogPost model or adjust the import path

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  selectedPost: BlogPost | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const postId = +this.route.snapshot.params['id'];

   
  }
}
