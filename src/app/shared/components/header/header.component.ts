import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { Anime } from '../../Interfaces/Anime';
import { User } from '../../Interfaces/User';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: String = 'Animatrix';
  @Input() navLinks= [{path:"/",label:"Home"}];

  constructor(
    private animeService: AnimeService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.animeService.getAnimes().subscribe((animes: Anime[]) => {
      console.log(animes);
    });
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
    });
  }
  public onHomeClick() {}
}
