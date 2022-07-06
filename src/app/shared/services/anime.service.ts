import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Anime } from '../Interfaces/Anime';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private httpClient: HttpClient) {}

  public getAnimes(): Observable<Anime[]> {
    return this.httpClient.get<Anime[]>('/api/animes');
  }
  public getGenres(): Observable<String[]> {
    return this.httpClient.get<String[]>('/api/genres');
  }
  public getAnimeByID(id:Number): Observable<Anime>{
    return this.httpClient.get<Anime>('/api/animes/'+id);
  }
  public addReview(anime:Anime):Observable<any>{
    let animeId = anime.id;
    let url = '/api/animes/' + animeId;
    return this.httpClient.put(url,anime).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error('Error while adding anime'));
      })
    );;
  }
}
