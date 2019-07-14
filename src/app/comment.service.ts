import { Injectable } from '@angular/core';

export interface Comment {
  name: string;
  message: string;
  date: any;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  comments: Comment[] = [];

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}
