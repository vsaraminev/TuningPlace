import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreatePartComponent } from './create-part/create-part.component';
import { PartAllComponent } from './part-all/part-all.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { EditPartComponent } from './edit-part/edit-part.component';
import { PartInfoComponent } from './part-info/part-info.component';
import { MaterialModule } from 'src/app/material.module';

import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { PartRoutingModule } from './part-routing.module';

@NgModule({
    declarations: [
        CreatePartComponent,
        EditPartComponent,
        PartAllComponent,
        PartDetailsComponent,
        PartInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PartRoutingModule,
        MaterialModule,
        MatInputModule,
        FlexLayoutModule,
        MatIconModule,
        MatCardModule
    ]
})

export class PartModule { }
