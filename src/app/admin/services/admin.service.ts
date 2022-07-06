import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Anime } from '../../shared/Interfaces/Anime';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  public addAnime(anime: Anime): Observable<Anime> {
    return this.httpClient.post<Anime>('api/animes', anime).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error('Error while adding anime'));
      })
    );
  }
}
