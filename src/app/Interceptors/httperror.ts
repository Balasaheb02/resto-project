import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class HttpError implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError((res: HttpErrorResponse) => {
                console.log(res)
                if (res.error.error) {
                    console.log(res.error.error);
                } else {
                    console.log(res.error.message);
                };
                return throwError(res.error)
            })
        );

    }
}