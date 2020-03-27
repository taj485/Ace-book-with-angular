import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    // constructor(private http:Http) {}
    getPosts(){
        return POSTS
    }
}

const POSTS =  [
    { id: 1,
      name:'Jenifer',
      date: '01/03/2020',
      post: 'My first post!',
      imageUrl: 'app/assets/images/happy.jpeg'
    },
    { id: 2,
      name:'Donnie Yen',
      date:'09/03/2020',
      post:'Have you seen my latest movie IP Man 4?',
      imageUrl:'app/assets/images/donnie yen.jpg'
    },
    { id: 3,
      name:'Will Smith',
      date:'01/03/2020',
      post:'Now this is a story all about how My life got flipped-turned upside down',
      imageUrl:'app/assets/images/will smith.jpg'
    }
  ];