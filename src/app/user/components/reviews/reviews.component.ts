import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/shared/Interfaces/Anime';
import { Review } from 'src/app/shared/Interfaces/Review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input()anime!:Anime;
  constructor() { }

  ngOnInit(): void {
  }

}
