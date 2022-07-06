import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: String = 'Animatrix';
  isUserAuthenticated: boolean = false; 
  navLinks = [
    { path: 'account', label: 'Account' },
    { path: 'animes', label: 'Animes' },
    { path: 'admin', label: 'Admin' },
  ];
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
  }
}
