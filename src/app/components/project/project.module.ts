import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectAllComponent } from './project-all/project-all.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { ProjectUserComponent } from './project-user/project-user.component';
import { CommentInfoComponent } from '../comment/comment-info/comment-info.component';
import { CreateCommentComponent } from '../comment/create-comment/create-comment.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
    declarations: [
        CreateProjectComponent,
        ProjectDetailsComponent,
        ProjectAllComponent,
        ProjectInfoComponent,
        ProjectUserComponent,
        CommentInfoComponent,
        CreateCommentComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProjectRoutingModule,
        MatInputModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatIconModule,
        MatCardModule
    ]
})

export class ProjectModule { }