import { Component, OnInit } from '@angular/core';
import { Anime } from '../../../shared/Interfaces/Anime';
import { AnimeService } from '../../../shared/services/anime.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  genres!: String[];
  animes!: Anime[];
  accountViews: String[] = ['Watched','Favourite','Watchlist'];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getGenres().subscribe((genres:String[])=>{
      this.genres = genres;
    });
    this.animeService.getAnimes().subscribe((animes:Anime[])=>{
      this.animes = animes;
    });
  }

  onSearchResult(searchedAnimes:Anime[]){
    this.animes = searchedAnimes;
  }
}
