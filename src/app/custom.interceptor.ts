import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let myToken: string | null = null;

    // Check if localStorage is available
    if (typeof localStorage !== 'undefined') {
      myToken = localStorage.getItem("myTok");
    }

    // Clone the request and set the Authorization header if the token is available
    if (myToken) {
      const cloneRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${myToken}`
        }
      });
      return next.handle(cloneRequest);
    } else {
      return next.handle(req);
    }
  }
}

