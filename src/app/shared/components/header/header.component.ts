import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  @Input() title: String = 'Animatrix';
  @Input() navLinks= [{path:"/",label:"Home"}];
  @Input() isUserAuthenticated:boolean = false;
  constructor(private authService:AuthService) {}
  ngOnInit(): void {
    console.log("Header onInit called!");
    console.log(this.navLinks);
    this.isUserAuthenticated = this.authService.isUserAuthenticated();
    if(this.isUserAuthenticated){
      this.navLinks.forEach((link, index)=>{
        if(link.path === 'login'){
          this.navLinks.splice(index,1);
        }
      });
    }
    else{
      this.navLinks.push({ path: 'login', label: 'Login' });
    }
  }
  public onHomeClick() {}
}
