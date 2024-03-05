import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {



  ngOnInit(): void {
  }



  register(email: string, password: string) {
    console.log(email, password)
    /* let account = {} as Account
     account.email = email
     account.password = password
     console.log(account)
     this.accountService.login(account).subscribe(
       (account: Account) => {
         this.accountService.accountLoggedSuccessfully(account)
       },
     );*/
  }


}
