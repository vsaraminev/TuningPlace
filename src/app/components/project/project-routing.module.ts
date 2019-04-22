import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectAllComponent } from './project-all/project-all.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectUserComponent } from './project-user/project-user.component';
import { SingleProjectResolver } from 'src/app/core/resolvers/single-project.resolver';

const projectRoutes: Route[] = [
    { path: 'all', component: ProjectAllComponent, canActivate: [AuthGuard] },
    { path: 'create', component: CreateProjectComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: ProjectDetailsComponent, canActivate: [AuthGuard], resolve: { project: SingleProjectResolver } },
    { path: 'user', component: ProjectUserComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(projectRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProjectRoutingModule { }