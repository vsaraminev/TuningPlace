import { CommentService } from '../../../core/services/comment.service';
import { Project } from '../../../core/models/project';
import { ProjectService } from '../../../core/services/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  comments$: Observable<Comment[]>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.project = this.route.snapshot.data['project'];
    this.loadComments();
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForProject(this.id);
  }
}
