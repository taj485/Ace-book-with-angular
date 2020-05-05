import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  posts: Post[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  addNewPost(text: string): void{
    var time = Date.now;

    const newPost: Post = { text } as Post;

    this.messageService
      .addToPost(newPost)
  }
}
