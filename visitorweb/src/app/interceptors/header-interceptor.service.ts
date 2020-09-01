import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let request = req.clone();
      request.headers.append("Content-Type", "application/json");
      request.headers.append("Authorization", "Bearer 123456789876543");
      return next.handle(request);
    
  }

}
