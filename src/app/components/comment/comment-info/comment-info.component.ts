import { Comment } from '../../../core/models/comment';
import { CommentService } from '../../../core/services/comment.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {
  @Input() commentInfo: Comment;
  @Output() deleteCommentEmitter = new EventEmitter<string>();
  id: string;
  constructor(
    private commentService: CommentService
  ) { }


  ngOnInit() {
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.deleteCommentEmitter.emit();
      });
  }

  isAuthor(commentInfo: object) {
    return commentInfo['creatorName'] === localStorage.getItem('username');
  }
}
