import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';
import { User } from 'src/app/shared/Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = { id: 0, name: '', email: '', password: '' };
  constructor(private router: Router) {}

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  isUserAuthenticated(): boolean {
    if (this.user.id === 0) {
      return false;
    }
    return true;
  }
  getCurrentUser(): User {
    return this.user;
  }
  loginUser(user: User) {
    this.user = user;
    if (this.redirectUrl) {
      this.router.navigateByUrl(this.redirectUrl);
    }
  }
}
