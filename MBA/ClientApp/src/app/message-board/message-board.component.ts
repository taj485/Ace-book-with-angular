import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Post } from '../models/Post';

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
    this.messageService.refreshNeeded
      .subscribe(() => {
        this.getAllPost();
      })

    this.getAllPost();
  }

  private getAllPost() {
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
