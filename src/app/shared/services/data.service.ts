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
        genre: ['Comedy'],
        image: 'assets/image1',
        imdbRating: 5,
        language: 'English',
      },
      {
        id: 2,
        name: 'Anime2',
        title: 'Title2',
        description: 'Anime2 description',
        genre: ['Adventure'],
        image: 'assets/image2',
        imdbRating: 7,
        language: 'English',
      },
      {
        id: 3,
        name: 'Anime3',
        title: 'Title3',
        description: 'Anime3 description',
        genre: ['Adventure'],
        image: 'assets/image3',
        imdbRating: 8,
        language: 'English',
      },
      {
        id: 4,
        name: 'Anime4',
        title: 'Title4',
        description: 'Anime4 description',
        genre: ['Action'],
        image: 'assets/image4',
        imdbRating: 9,
        language: 'English',
      },
    ];

    let users: User[] = [
      {
        id: 1,
        name: 'User1',
        email: 'user1@somesite.com',
        password: 'password1',
      },
      {
        id: 2,
        name: 'User2',
        email: 'user2@somesite.com',
        password: 'password2',
      },
    ];

    let genres: String[] = [
      'Action',
      'Adventure',
      'Comedy',
      'Romance',
      'Shonen',
      'Thriller',
    ];
    return { animes, users, genres };
  }
}
