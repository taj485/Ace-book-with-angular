import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Post } from '../../models/Post';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  posts: Post[];

  //postForm will be accessed from html template
  postForm:FormGroup

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    //let id = new FormControl()
    //let user = new FormControl()
    let text = new FormControl()
    this.postForm = new FormGroup({
      //id: id,
      //user: user,
      text: text
    })
  }

  addNewPost(formValues): void{
    var time = Date.now;

    const newPost: Post = formValues;

    this.messageService
      .addToPost(newPost)
  }
}
