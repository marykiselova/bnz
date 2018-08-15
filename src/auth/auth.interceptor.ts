import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../providers';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    
    constructor(public user: User){
        console.log("init auth interceptor");
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log("auth interceptor", this.user._user);
        
        if (this.user._user) {
            let token = this.user._user.id;
            request = request.clone({
                setHeaders: {
                    "Authorization":  token
                }
            });
        }
        return next.handle(request);
    }
}