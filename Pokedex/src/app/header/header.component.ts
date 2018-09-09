import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user;
  constructor(
    private userService: UserService,
  ) { this.userService.userEmitter.subscribe(user => { this.user = user }) }

  logout() {
    this.userService.logout();
  }
}
