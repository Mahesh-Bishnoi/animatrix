import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/shared/Interfaces/Anime';
import { AnimeService } from 'src/app/shared/services/anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchBy: String = SearchByString.Name;
  searchText: String = '';
  animes: Anime[] = [];
  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe((animes: Anime[])=>{
      this.animes = animes;
    })
  }

  public onSearch(){
    console.log(this.searchBy);
    console.log(this.searchText);
  }

}
enum SearchByString {
  Name = 'Name',
  Title = 'Title',
  Description = 'Description',
}