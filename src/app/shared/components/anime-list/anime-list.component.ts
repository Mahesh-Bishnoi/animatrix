import { NumberInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { Anime } from '../../Interfaces/Anime';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];
  @Input() genre: String = '';
  @Input() columns: NumberInput = '8';
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe((animes: Anime[]) => {
      if (this.genre === '' || this.genre === 'All') {
        this.animes = animes;
      } else {
        this.animes = animes.filter((anime: Anime) => {
          return anime.genre?.includes(this.genre);
        });
      }
      this.breakPoints();
    });
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

  onResize(event: any) {
    this.breakPoints();
  }
}
