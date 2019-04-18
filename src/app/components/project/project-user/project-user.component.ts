import { Project } from '../../../shared/models/project';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.css']
})
export class ProjectUserComponent implements OnInit {
  userProjects$: Observable<Project[]>;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.userProjects$ = this.projectService.getUserProjects();
  }

  deleteProject(id) {
    this.projectService.deleteProject(id)
      .subscribe(() => {
        this.userProjects$ = this.projectService.getUserProjects();
      });
  }
}
