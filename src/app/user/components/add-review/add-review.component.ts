import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Anime } from '../../../shared/Interfaces/Anime';
import { Review } from '../../../shared/Interfaces/Review';
import { AnimeService } from '../../../shared/services/anime.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
})
export class AddReviewComponent implements OnInit {
  @Input() anime!: Anime;
  reviewForm!: FormGroup;
  @Output() animeUpdate: EventEmitter<Anime> = new EventEmitter<Anime>();
  constructor(
    private animeService: AnimeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      review: new FormControl('', [Validators.required]),
    });
  }

  get review(): any {
    return this.reviewForm.get('review');
  }
  public onAddReview() {
    if (this.authService.isUserAuthenticated()) {
      console.log('User authenticated');
      let review: Review = {
        user: this.authService.getCurrentUser(),
        review: this.reviewForm.get('review')?.value,
      };
      let userReviewAlreadyExists: boolean = false;
      this.anime.reviews?.forEach((review) => {
        if (review.user.id === this.authService.getCurrentUser().id) {
          userReviewAlreadyExists = true;
        }
      });
      if (!userReviewAlreadyExists) {
        this.anime.reviews?.push(review);
        this.animeService.addReview(this.anime).subscribe((anime) => {
          console.log(anime);
          alert('Review Added!');
          this.animeUpdate.emit(this.anime);
        });
      }else{
        alert("Review already added!");
      }
    } else {
      console.log('User not authenticated');
      this.router.navigateByUrl('/login');
    }
  }
  public getErrorMessage() {
    return "This filed can't be empty, You must enter a value";
  }
}
