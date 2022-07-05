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
export class HeaderComponent {
  @Input() title: String = 'Animatrix';
  @Input() navLinks= [{path:"/",label:"Home"}];

  constructor() {}
  public onHomeClick() {}
}
