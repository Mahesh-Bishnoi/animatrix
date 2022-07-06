import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/shared/Interfaces/Anime';
import { AnimeService } from 'src/app/shared/services/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss']
})
export class AnimeDetailsComponent implements OnInit {

  animeId!:Number ;
  anime!:Anime;
  constructor(private animeService:AnimeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animeId = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.getAnimeByID(this.animeId).subscribe((anime:Anime)=>{
      this.anime = anime;
      console.log(anime);
    });
  }

  onAddReview(anime:Anime){
    this.anime = anime;
  }
}
