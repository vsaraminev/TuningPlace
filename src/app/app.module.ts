import { MaterialModule } from './material.module';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectAllComponent } from './components/project/project-all/project-all.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { ProjectUserComponent } from './components/project/project-user/project-user.component';
import { PartAllComponent } from './components/part/part-all/part-all.component';
import { CreatePartComponent } from './components/part/create-part/create-part.component';
import { PartDetailsComponent } from './components/part/part-details/part-details.component';
import { EditPartComponent } from './components/part/edit-part/edit-part.component';
import { ProjectInfoComponent } from './components/project/project-info/project-info.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CreateCommentComponent } from './components/comment/create-comment/create-comment.component';
import { CommentInfoComponent } from './components/comment/comment-info/comment-info.component';
import { PartInfoComponent } from './components/part/part-info/part-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    DropdownDirective,
    CollapseDirective,
    ProjectAllComponent,
    CreateProjectComponent,
    ProjectDetailsComponent,
    ProjectUserComponent,
    PartAllComponent,
    CreatePartComponent,
    PartDetailsComponent,
    EditPartComponent,
    CreateCommentComponent,
    CommentInfoComponent,
    ProjectInfoComponent,
    HeaderComponent,
    FooterComponent,
    PartInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
