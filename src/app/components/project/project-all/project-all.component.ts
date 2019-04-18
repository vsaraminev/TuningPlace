import { AuthService } from '../../../authentication/auth.service';
import { ProjectService } from './../project.service';
import { Project } from '../../../shared/models/project';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-all',
  templateUrl: './project-all.component.html',
  styleUrls: ['./project-all.component.css']
})
export class ProjectAllComponent implements OnInit {
  projects$: Observable<Project[]>;
  constructor(private projectService: ProjectService, public authService: AuthService) { }

  ngOnInit() {
    this.projects$ = this.projectService.getAllProjects()
  }
}
