import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/Interfaces/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email(): any {
    return this.loginForm.get('email');
  }
  get password(): any {
    return this.loginForm.get('password');
  }
  public getErrorMessage(item: String): String {
    if (item === 'email') {
      if (this.email.hasError('email')) {
        return 'Invalid email, Please enter a valid Email';
      }
    }
    return "This filed can't be empty, You must enter a value";
  }

  public onLogin() {
    if (this.loginForm.valid) {
      this.userService.getUsers().subscribe((users: User[]) => {
        let emailMatched: boolean = false;
        let passwordMatched: boolean = false;
        let email: String = this.loginForm.get('email')?.value;
        let password: String = this.loginForm.get('password')?.value;
        users.forEach((user) => {
          if (user.email === email) {
            emailMatched = true;
            if (user.password === password) {
              passwordMatched = true;
            }
          }
        });
        if (emailMatched) {
          if (passwordMatched) {
            alert('Login Successful!');
          } else {
            alert('Incorrect password!');
          }
        } else {
          alert('User not found!');
        }
      });
    }
  }
}
