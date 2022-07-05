import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Anime } from 'src/app/shared/Interfaces/Anime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchBy: String = SearchByString.Name;
  searchText: String = '';
  @Input() animes!: Anime[] ;
  allAnimes: Anime[] = [];
  @Output() searchResult:EventEmitter<Anime[]> = new EventEmitter<Anime[]>();
  constructor() { }

  ngOnInit(): void {
      this.allAnimes = this.animes;
  }

  public onSearch(){
    let searchedAnimes:Anime[] = [];
    switch (this.searchBy) {
      case SearchByString.Name:
        searchedAnimes = this.allAnimes.filter((anime:Anime)=>{
          return anime.name.includes(this.searchText.toString());
        });
        break;
      case SearchByString.Title:
        searchedAnimes = this.allAnimes.filter((anime:Anime)=>{
          return anime.title.includes(this.searchText.toString());
        });
        break;
      case SearchByString.Description:
        searchedAnimes = this.allAnimes.filter((anime:Anime)=>{
          return anime.description?.includes(this.searchText.toString());
        });
        break;
      default:
        searchedAnimes = this.allAnimes.filter((anime:Anime)=>{
          return anime.name.includes(this.searchText.toString());
        });
    }
    this.searchResult.emit(searchedAnimes);
  }

}
enum SearchByString {
  Name = 'Name',
  Title = 'Title',
  Description = 'Description',
}