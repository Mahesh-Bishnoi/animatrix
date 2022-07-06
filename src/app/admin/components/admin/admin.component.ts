import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Anime } from 'src/app/shared/Interfaces/Anime';
import { AnimeService } from 'src/app/shared/services/anime.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  animeForm!: FormGroup;
  genres: String[] = [];
  
  get name(): any {
    return this.animeForm.get('name');
  }
  get title(): any {
    return this.animeForm.get('title');
  }
  get description(): any {
    return this.animeForm.get('description');
  }
  get genre(): any {
    return this.animeForm.get('genre');
  }
  get language(): any {
    return this.animeForm.get('language');
  }
  get imdbRating(): any {
    return this.animeForm.get('imdbRating');
  }
  constructor(private adminService: AdminService, private animeService:AnimeService) {}

  ngOnInit(): void {
    this.animeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      language: new FormControl('', [Validators.required]),
      imdbRating: new FormControl('', [Validators.required]),
    });
    this.animeService.getGenres().subscribe((genres:String[])=>{
      this.genres = genres;
    })
  }

  public getErrorMessage(): String {
    return "This filed can't be empty, You must enter a value";
  }

  public onAddAnime() {
    let image: String = 'assets/goku-256.png';
    let anime: Anime = {
      id: new Date().getTime(),
      name: this.animeForm.value.name,
      title: this.animeForm.value.title,
      description: this.animeForm.value.description,
      genre: this.animeForm.value.genre,
      language: this.animeForm.value.language,
      imdbRating: this.animeForm.value.imdbRating,
      image: image,
      reviews: [],
    };
    this.adminService.addAnime(anime).subscribe((anime: Anime) => {
      alert('Added successfully!');
      console.log(anime);
    });
  }
}
