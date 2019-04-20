import { CommentService } from '../../../core/services/comment.service';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {
  @ViewChild('f') createCommentForm: NgForm;
  @Input() projectId: string;
  @Output() projectCommentEmiter = new EventEmitter<void>();
  comments$: Observable<Comment[]>;
  id: string;
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  projectComment() {
    const body = this.createCommentForm.value;
    body['projectId'] = this.projectId;
    body['creatorName'] = localStorage.getItem('username');

    this.commentService
      .createComment(body)
      .subscribe(() => {
        this.projectCommentEmiter.emit(body);
        this.createCommentForm.reset();
      });
  }
}
