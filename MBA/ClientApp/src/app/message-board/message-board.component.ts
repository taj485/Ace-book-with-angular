import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { Post } from '../shared/Post';

@Component({
  selector: 'message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {

  constructor(private messageService : MessageService) {
  }

  public posts: Post[] = [];

  //interface - once your ready call my methods
  ngOnInit(): void {
    this.messageService.loadApiPosts()
      .subscribe(success => {
        if (success) {
          this.posts = this.messageService.posts;
        }
      });
  }

  handleChildEvent(data) {
     console.log(data)
  }

}
