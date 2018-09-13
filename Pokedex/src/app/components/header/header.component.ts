import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user;
  constructor(
    private userService: UserService,
  ) { this.userService.user.subscribe(user => { this.user = user }) }

  logout(): void {
    this.userService.logout();
  }
}
