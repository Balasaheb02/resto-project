import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(requestToHandle: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = requestToHandle.clone({
            setHeaders: {
                Authorization: `Basic 34303304-5475-4d63-9352-0d24ed631b37`
            }
        });
        return next.handle(authReq);
    }
}