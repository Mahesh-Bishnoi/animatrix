import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../Interfaces/Anime';
import { Observable } from 'rxjs';

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
}
