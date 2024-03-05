import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate() {
    return this.checkUserLogin();
  }

  checkUserLogin(): boolean {
    if (this.authService.isLogged()) {
      return true
    }
    this.router.navigate(['/login'])
    return false
  }

}
