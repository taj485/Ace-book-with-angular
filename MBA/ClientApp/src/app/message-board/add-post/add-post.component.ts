import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Post } from '../../models/Post';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  //postForm will be accessed from html template
  postForm: FormGroup
  private text:FormControl

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.text = new FormControl("",Validators.required)
    this.postForm = new FormGroup({
      text: this.text
    })
  }

  addNewPost(formValues): void{
    if (this.postForm.valid) {
      const newPost: Post = formValues;

      this.messageService
        .addToPost(newPost)
    }
  }

  validateText() {
     return this.text.touched
  }
}
