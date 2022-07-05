import { NumberInput } from '@angular/cdk/coercion';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from '../../Interfaces/Anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit, DoCheck {
  @Input() animes!: Anime[] ;
  animeByGenre: Anime [] = [];
  @Input() genre: String = '';
  columns: NumberInput = '6';
  constructor() {}

  ngOnInit(): void {
    this.refresh();
  }

  ngDoCheck(): void {
    this.refresh();
  }

  public breakPoints() {
    switch (true) {
      case window.innerWidth <= 480:
        this.columns = '1';
        break;
      case window.innerWidth > 480 && window.innerWidth <= 640:
        this.columns = '2';
        break;
      case window.innerWidth > 640 && window.innerWidth <= 992:
        this.columns = '4';
        break;
      default:
        this.columns = '6';
    }
  }

  refresh(){
    this.breakPoints();
    if (this.genre === '' || this.genre === 'All') {
      this.animeByGenre = this.animes;
    } else {
      this.animeByGenre = this.animes.filter((anime: Anime) => {
        return anime.genre?.includes(this.genre);
      });;
    }
  }
  onResize(event: any) {
    this.breakPoints();
  }
}
