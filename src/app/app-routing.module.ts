import { EditPartComponent } from './components/part/edit-part/edit-part.component';
import { PartDetailsComponent } from './components/part/part-details/part-details.component';
import { PartAllComponent } from './components/part/part-all/part-all.component';
import { CreatePartComponent } from './components/part/create-part/create-part.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/shared/home/home.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AdminGuard } from './core/guards/admin.guard';
import { ContactComponent } from './components/shared/contact/contact.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'project', loadChildren: './components/project/project.module#ProjectModule'  },
  {
    path: 'part', children: [
      { path: 'all', component: PartAllComponent, canActivate: [AuthGuard] },
      { path: 'create', component: CreatePartComponent, canActivate: [AdminGuard] },
      { path: 'details/:id', component: PartDetailsComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: EditPartComponent, canActivate: [AdminGuard] }
    ]
  },
  { path: 'order/all', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }