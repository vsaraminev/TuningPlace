import { ProjectService } from './../services/project.service';
import { Project } from './../models/project'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SingleProjectResolver implements Resolve<Project> {
    constructor(
        private projectService: ProjectService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'];

        return this.projectService.getProject(id);
    }
}