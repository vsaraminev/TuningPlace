import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule
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
        MatMenuModule
    ]
})

export class MaterialModule { }