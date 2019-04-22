import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule
} from '@angular/material';

import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule
    ]
})

export class MaterialModule { }