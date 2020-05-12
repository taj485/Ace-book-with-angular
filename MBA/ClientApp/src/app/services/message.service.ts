import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';
import { Post } from './../Models/Post';

@Injectable() // tell angular when it injects the module it may need its own dependencies
export class MessageService {
  constructor(private httpClient: HttpClient) { }

  public posts: Post[] = [];

  public newPost: Post;

  private _refreshNeeded = new Subject<void>();
  
  get refreshNeeded() {
    return this._refreshNeeded;
  }

  addToPost(nPost: Post) {
    return this.httpClient
      .post<Post>("/api/posts/addpost", nPost)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      )
      .toPromise().then(data => {
        console.log(data)
      })
  }

  getAllPosts(): Observable<boolean>{
    //response we get back from the HTTP call is an observable
    //Map/cast oberservable data to model
    //passes the data to everyone that has suscribed

    //suscribe - when api call is complete I want to know what is the response
    //before suscribe intercept the call and change/map the data before it is returned to the caller
    //by useing rxjs/operators for interceptors ..pipe..map
    //user suscribe on the caller

    return this.httpClient.get("/api/posts/getallpost")
      .pipe( // pipe returns an observeable so angular can watch and suscribe to it
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
