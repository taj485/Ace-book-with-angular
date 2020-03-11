import { Component, OnInit } from '@angular/core';
import { MessageService } from './shared/message.service';

@Component({
  selector: 'message-board',
  template: `
  <div>
    <h1>Messages Board</h1>
    <post-thumbnail 
      (eventClick)="handleChildEvent($event)"
      *ngFor="let post of posts" [messages]="post">
    </post-thumbnail>
  </div>
  `,
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
  posts:any[]

  constructor(private messageService : MessageService) {
   }

  ngOnInit(): void {
    this.posts = this.messageService.getPosts()
  }

  handleChildEvent(data) {
     console.log(data)
  }

}
