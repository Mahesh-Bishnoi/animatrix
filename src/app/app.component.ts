import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: String = 'Animatrix';
  navLinks = [
    { path: 'animes', label: 'Animes' },
    { path: 'login', label: 'Login' },
    { path: 'admin', label: 'Admin' },
  ];
}
