import { CommentService } from './../../comment/comment.service';
import { Project } from '../../../shared/models/project';
import { ProjectService } from './../project.service';
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
      this.projectService.getProject(this.id).subscribe((data) => {
        this.project = data;
      });
    this.loadComments();
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForProject(this.id);
  }
}
