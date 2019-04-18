import { EditPartComponent } from './components/part/edit-part/edit-part.component';
import { PartDetailsComponent } from './components/part/part-details/part-details.component';
import { PartAllComponent } from './components/part/part-all/part-all.component';
import { CreatePartComponent } from './components/part/create-part/create-part.component';
import { AuthGuard } from './authentication/guards/auth.guard';
import { ProjectUserComponent } from './components/project/project-user/project-user.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { ProjectAllComponent } from './components/project/project-all/project-all.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AdminGuard } from './authentication/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'project/create', component: CreateProjectComponent, canActivate: [AuthGuard] },
  { path: 'project/all', component: ProjectAllComponent, canActivate: [AuthGuard] },
  { path: 'project/details/:id', component: ProjectDetailsComponent, canActivate: [AuthGuard] },
  { path: 'project/user', component: ProjectUserComponent, canActivate: [AuthGuard] },
  { path: 'part/create', component: CreatePartComponent, canActivate: [AdminGuard] },
  { path: 'part/all', component: PartAllComponent, canActivate: [AdminGuard] },
  { path: 'part/details/:id', component: PartDetailsComponent, canActivate: [AdminGuard] },
  { path: 'part/edit/:id', component: EditPartComponent, canActivate: [AdminGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }