import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { HomeComponent } from './components/shared/home/home.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'order/all', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  {
    path: 'project', loadChildren: './components/project/project.module#ProjectModule'
  },
  {
    path: 'part', loadChildren: './components/part/part.module#PartModule'
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }