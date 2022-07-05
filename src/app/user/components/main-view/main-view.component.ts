import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeService } from 'src/app/shared/services/anime.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  genres!: Observable<String[]>;

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.genres = this.animeService.getGenres();
  }

}
