import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AgmCoreModule,
        MatToolbarModule,
        MatIconModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB0ves4aaQ7Ihq_TIX-2Uwca7Hr5wGjm0w'
        })
    ],
    exports: [
        ContactComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent
    ]
})

export class SharedModule { }