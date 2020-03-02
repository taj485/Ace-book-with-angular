import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  template: `
  <div>
    <h1>Messages Board</h1>
    <hr/>
    <post-thumbnail 
      (eventClick)="handleChildEvent($event)"
      [messages]="posts">
    </post-thumbnail>
  </div>
  `,
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = {
    id: 1,
    name:'Donnie Yen',
    date: '01/03/2020',
    post: 'My first post!',
    imageUrl: './assets/images/donnie-yen'
  };

  handleChildEvent(data) {
     console.log(data)
  }

}
