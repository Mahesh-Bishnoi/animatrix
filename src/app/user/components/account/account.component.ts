import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from '../../../shared/Interfaces/Anime';
import { User } from '../../../shared/Interfaces/User';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountViews: UserViewsAndAnime[] = [{view:'Watched',animes:[]},{view:'Favourite',animes:[]},{view:'Watchlist',animes:[]}];
  user!:User;
  constructor(private authService: AuthService, private router: Router, private userService:UserService) { 
    // this.router.routeReuseStrategy.shouldReuseRoute = function() {
    //   return false;
    // };
  }

  ngOnInit(): void {
    console.log('Account on init!');
    this.userService.getUserbyId(this.authService.getCurrentUser().id).subscribe((user:User)=>{
      this.user = user;
      console.log(this.user);
      let accountViewsLocal: UserViewsAndAnime[] = [{view:'Watched',animes:[]},{view:'Favourite',animes:[]},{view:'Watchlist',animes:[]}];
      accountViewsLocal.forEach((userViewsAndAnime:UserViewsAndAnime)=>{
        if(userViewsAndAnime.view==='Watched'){
          if(this.user.watched){
            userViewsAndAnime.animes = this.user.watched;
          }
        }
        if(userViewsAndAnime.view==='Favourite'){
          if(this.user.favourite){
            userViewsAndAnime.animes = this.user.favourite;
          }
        }
        if(userViewsAndAnime.view==='Watchlist'){
          if(this.user.watchedLater){
            userViewsAndAnime.animes = this.user.watchedLater;
          }
        }
      });
      this.accountViews = accountViewsLocal;
      console.log(this.accountViews);
    });
  }

}
interface UserViewsAndAnime{
  view:String;
  animes:Anime[];
}