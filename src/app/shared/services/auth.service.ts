import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { User } from 'src/app/shared/Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User = {id:0,name:'',email:'',password:''};
  constructor() { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isUserAuthenticated():boolean{
    if(this.user.id===0){
      return false;
    }
    return true;
  }
  getCurrentUser():User{
    return this.user;
  }
  loginUser(user:User){
    this.user = user;
  }
}
