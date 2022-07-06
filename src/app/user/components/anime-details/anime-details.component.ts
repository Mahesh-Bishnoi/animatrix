import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, UrlSegment } from '@angular/router';
import { Anime } from 'src/app/shared/Interfaces/Anime';
import { AnimeService } from 'src/app/shared/services/anime.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  animeId!:Number ;
  anime!:Anime;
  constructor(private animeService:AnimeService,private route: ActivatedRoute, private authService:AuthService, private router: Router, private userService:UserService){}
  ngOnInit(): void {
    this.animeId = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.getAnimeByID(this.animeId).subscribe((anime:Anime)=>{
      this.anime = anime;
      console.log(anime);
    });
  }

  onAddReview(anime:Anime){
    this.anime = anime;
  }
  onBookmark(){
    if(this.authService.isUserAuthenticated()){
      this.authService.getCurrentUser().watchedLater?.push(this.anime);
      this.userService.updateUser(this.authService.getCurrentUser()).subscribe((user:any)=>{
        console.log(user);
      });
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
  onFavourite(){
    if(this.authService.isUserAuthenticated()){
      this.authService.getCurrentUser().favourite?.push(this.anime);
      this.userService.updateUser(this.authService.getCurrentUser()).subscribe((user:any)=>{
        console.log(user);
      });
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
  onWatch(){
    if(this.authService.isUserAuthenticated()){
      this.authService.getCurrentUser().watched?.push(this.anime);
      this.userService.updateUser(this.authService.getCurrentUser()).subscribe((user:any)=>{
        console.log(user);
      });
    }
    else{
      this.router.navigateByUrl('/login');
    }
  }
}
