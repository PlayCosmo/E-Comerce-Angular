import { Injectable, OnInit } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UserInterceptorService implements HttpInterceptor, OnInit{
 public token:any
  constructor(public http:ApiService) { }
   ngOnInit(): void {
    this.http.tokenInfo.subscribe((data:any)=>{
      this.token = data
      console.log(this.token);
    })
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
  
    const clonedRequest = req.clone({ headers: req.headers.append('Authorization', `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjUxYmQ2ZDAyMzBlY2M0NTVhNWNlN2IiLCJmaXJzdE5hbWUiOiJOb2RhciIsImxhc3ROYW1lIjoiS3ZhcmFpYSIsImFnZSI6MzAsImVtYWlsIjoibm9kYXJpLmt2YXJhaWFAZ21haWwuY29tIiwiYWRkcmVzcyI6IlNULk5pbm9zIFN0cmVldCAjNjIgWlVHRElESSwgR0VPUkdJQSIsInJvbGUiOiJkZWZhdWx0IiwiemlwY29kZSI6IjIxMDAiLCJhdmF0YXIiOiJub2Rhci5qcGciLCJnZW5kZXIiOiJNQUxFIiwicGhvbmUiOiIrKDk5NSkgNTcxMTgzODg1IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTcxNjcyMzcxNSwiZXhwIjoxNzE2NzI3MzE1fQ.fDxFyS07cFTqXMpR0wqB0-wLqQZGkvoDQdlXHT9V8lk"`) });


    return next.handle(clonedRequest);
  }
}
