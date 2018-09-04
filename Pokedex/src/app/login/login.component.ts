import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = {
    name: '',
    password: '',
  }
  errorMessage: any = null;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  onSubmit() {
    this.userService
      .login(this.model)
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data))
        },
        error => {
          console.log(error);
        },
      )
  }
}
