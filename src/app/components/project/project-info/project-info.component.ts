import { ProjectService } from '../../../core/services/project.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/core/models/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  @Input() project: Project;
  @Input() description: string;
  @Output() deleteProjectEmiter = new EventEmitter<any>();

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isAuthor(project: Project) {
    return project['creator'] === localStorage.getItem('userId');
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== 'true';
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id)
      .subscribe(() => {
        this.router.navigate(['/project/all']);
        this.deleteProjectEmiter.emit();
      });
  }
}
