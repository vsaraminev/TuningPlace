import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap(
                    (event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            if (event.url.endsWith('login')
                                || event.url.endsWith('register')
                                || event.url.endsWith('create')
                                || event.url.includes('delete')
                                || event.url.includes('edit')) {
                                this.toastr.success(event.body.message);
                            }
                        }
                    }
                )
            );
    }
}