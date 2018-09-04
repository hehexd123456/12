import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
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
      .signup(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMessage = error.error;
        },
      )
  }
}
