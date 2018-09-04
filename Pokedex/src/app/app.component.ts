import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  user = localStorage.getItem('user');

  logout() {
    localStorage.clear();
  }
}
