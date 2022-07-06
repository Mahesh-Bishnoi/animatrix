import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Interfaces/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  hide: boolean = true;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    })
  }

  get email(): any {
    return this.registerForm.get('email');
  }
  get password(): any {
    return this.registerForm.get('password');
  }
  get name(): any {
    return this.registerForm.get('name');
  }

  public getErrorMessage(item: String): String {
    if (item === 'email') {
      if (this.email.hasError('email')) {
        return 'Invalid email, Please enter a valid Email';
      }
    }
    return "This filed can't be empty, You must enter a value";
  }

  public onRegister() {
    if(this.registerForm.valid){
      let emailMatched: boolean = false;
      this.userService.getUsers().subscribe((users: User[]) => {
        let email: String = this.registerForm.get('email')?.value;
        users.forEach((user) => {
          if (user.email === email) {
            emailMatched = true;
          }
        });
      });
      if (emailMatched) {
        alert('User already exists!');
      } else {
        let user:User = {
          id: new Date().getTime(),
          name:this.registerForm.get('name')?.value,
          email:this.registerForm.get('email')?.value,
          password:this.registerForm.get('password')?.value,
          watched:[],
          favourite:[],
          watchedLater:[],
        }
        this.userService.addUser(user).subscribe((addedUser:User)=>{
          console.log(addedUser);
          alert("Registration successful!");
          this.router.navigateByUrl('/login');
        })
      }
    }
  }
}
