import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id:Number) {
    console.log('get post servivec')
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
