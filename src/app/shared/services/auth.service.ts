import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Interfaces/User';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = { id: 0, name: '', email: '', password: '' };
  constructor(private router: Router,private httpClient: HttpClient) {}

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

  optPrimeForUser(){
    if(this.isUserAuthenticated()){
      if(this.user.primeUser){
        alert("Already prime user!");
      }else{
        this.user.primeUser = true;
        this.httpClient.put<User>('/api/users/'+this.user.id,this.user).subscribe(()=>{
          alert("Prime membership activated!");
        });
      }
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
}
