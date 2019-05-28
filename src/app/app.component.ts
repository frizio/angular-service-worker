import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';


const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get<Post[]>(POSTS_URL)
      .subscribe(
        fetchedPosts => (
          this.posts = fetchedPosts)
      );
  }
}
