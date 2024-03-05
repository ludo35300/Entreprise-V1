
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, elementAt } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.user.token;
    if (token !== null) {
      let clone = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + token)
      })
      return next.handle(clone)
    }
    else {
      return next.handle(req)
    }
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
