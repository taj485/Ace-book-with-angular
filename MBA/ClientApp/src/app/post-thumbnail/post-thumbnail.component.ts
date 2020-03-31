import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/Post';

@Component({
  selector: 'post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.css']
})
export class PostThumbnailComponent implements OnInit {

  @Input() messages:Post

  @Output() eventClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe() {
   this.eventClick.emit('message from child component')
  };


}
