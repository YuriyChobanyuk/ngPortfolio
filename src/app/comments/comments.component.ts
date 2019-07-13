import { Component, OnInit } from '@angular/core';
import {Comment, CommentService} from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  constructor(public commentService: CommentService) { }

  name = '';
  message = '';

  sendComment() {
    if (this.name.length < 2 || this.message.length == 0){
      alert('Invalid input info');
      return false;
    }
    const comment: Comment = {
      name: this.name,
      message: this.message,
      date: new Date(Date.now())
    }
    this.commentService.addComment(comment);
    this.name = this.message = '';
  }

  ngOnInit() {
  }

}
