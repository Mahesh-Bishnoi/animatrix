import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: String = 'Animatrix';
  navLinks = [
    { path: 'admin', label: 'Admin' },
    { path: 'login', label: 'Login' },
  ];
}
