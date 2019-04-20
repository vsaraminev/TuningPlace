import { AuthenticationModule } from './components/authentication/authentication.module';
import { MaterialModule } from './material.module';
import { JwtInterceptorService } from './core/interceptors/jwt-interceptor.service';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DropdownDirective } from './navigation/dropdown.directive';
import { CollapseDirective } from './navigation/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { SharedModule } from './components/shared/shared.module';
import { PartModule } from './components/part/part.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DropdownDirective,
    CollapseDirective,
    OrderListComponent
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
    SharedModule,
    PartModule,
    AuthenticationModule,
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
