import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-board',
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
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = {
    id: 1,
    name:'Donnie Yen',
    date: '01/03/2020',
    post: 'My first post!',
    imageUrl: '/assets/images/donnie yen.jpg'
  };

  handleChildEvent(data) {
     console.log(data)
  }

}
