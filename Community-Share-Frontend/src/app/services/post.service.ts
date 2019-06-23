import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  configUrl = 'localhost:8080/api/post/getall';
  
  getPosts() {
    //returns an Observable of Post
    return this.http.get<Post[]>(this.configUrl);
  }

  makePosts() {
    return this.http.get<Post[]>(this.configUrl);
  }
}
