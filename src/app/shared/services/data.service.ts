import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Anime } from '../../shared/Interfaces/Anime';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let animes: Anime[] = [
      {
        id: 1,
        name: 'Anime1',
        title: 'Title1',
        description: 'Anime1 description',
        genre: 'Genre1',
        image: 'image1',
        imdbRating: 5,
        language: 'English',
      },
      {
        id: 2,
        name: 'Anime2',
        title: 'Title2',
        description: 'Anime2 description',
        genre: 'Genre2',
        image: 'image2',
        imdbRating: 7,
        language: 'English',
      },
      {
        id: 3,
        name: 'Anime3',
        title: 'Title3',
        description: 'Anime3 description',
        genre: 'Genre3',
        image: 'image3',
        imdbRating: 8,
        language: 'English',
      },
      {
        id: 4,
        name: 'Anime4',
        title: 'Title4',
        description: 'Anime4 description',
        genre: 'Genre1',
        image: 'image4',
        imdbRating: 9,
        language: 'English',
      },
    ];
    let users: User[] = [
      {
        id: 1,
        name: 'User1',
        password: 'password1',
      },
      {
        id: 2,
        name: 'User2',
        password: 'password2'
      },
    ];
    return { animes, users };
  }
}
