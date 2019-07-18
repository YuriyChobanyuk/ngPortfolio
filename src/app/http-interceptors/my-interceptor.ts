import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {AuthenticationService} from '../authentication.service';


@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = this.auth.TOKEN;
    if (token) {
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', token)
        })
      );
    }

    return next.handle(req);
  }
}
