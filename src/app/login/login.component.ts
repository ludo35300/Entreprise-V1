import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AuthService,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  login(email: string, password: string) {

    let user = {} as User
    user.email = email
    user.password = password
    console.log(user)
    /*this.authService.login(user).subscribe(
      (account: User) => {
        this.authService.accountLoggedSuccessfully(account)
      },
    );*/





  }

}
