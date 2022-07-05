import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/shared/Interfaces/Anime';
import { AnimeService } from 'src/app/shared/services/anime.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  genres!: Observable<String[]>;
  animes!: Observable<Anime[]>;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.genres = this.animeService.getGenres();
    this.animes = this.animeService.getAnimes();
  }

}
