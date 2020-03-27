import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable() // tell angular when it injects the module it may need its own dependencies
export class MessageService {

  constructor(private http: HttpClient) { }

  public posts = [];

  getPosts(){
    return POSTS
  }

  loadApiPosts(): Observable<any>{
    //suscribe - when api call is complete I want to know what is the response
    //before suscribe intercept the call and change some of the data before it is returned to the caller
    //by useing rxjs/operators for interceptors ..pipe..map
    //user suscribe on the caller

    return this.http.get("/api/posts/getallpost")
      .pipe(
        map((data: any[]) => {
          this.posts = data;
          return true;
        })
      )
  }

}



const POSTS = [
    { id: 1,
      name:'Jenifer',
      date: '01/03/2020',
      post: 'My first post!',
      imageUrl: 'assets/images/happy.jpeg'
    },
    { id: 2,
      name:'Donnie Yen',
      date:'09/03/2020',
      post:'Have you seen my latest movie IP Man 4?',
      imageUrl:'assets/images/donnie yen.jpg'
    },
    { id: 3,
      name:'Will Smith',
      date:'01/03/2020',
      post:'Now this is a story all about how My life got flipped-turned upside down',
      imageUrl:'assets/images/will smith.jpg'
    }
  ];
