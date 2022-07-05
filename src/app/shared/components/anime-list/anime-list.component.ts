import { Component, OnInit } from '@angular/core';
import { Anime } from '../../Interfaces/Anime';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe((animes: Anime[]) => {
      this.animes = animes;
    });
  }
}
