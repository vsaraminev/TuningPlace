import { JwtInterceptorService } from './interceptors/jwt-interceptor.service';
import { CommentService } from './services/comment.service';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SingleProjectResolver } from './resolvers/single-project.resolver';
import { ProjectService } from './services/project.service';
import { PartService } from './services/part.service';
import { OrderService } from './services/order.service';
import { SuccessInterceptor } from './interceptors/success.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
    providers: [
        SingleProjectResolver,
        AuthService,
        ProjectService,
        PartService,
        CommentService,
        OrderService,
        JwtInterceptorService,
        SuccessInterceptor,
        ErrorInterceptor,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SuccessInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],

})

export class CoreModule { }