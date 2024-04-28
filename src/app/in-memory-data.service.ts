import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Michel' },
      { id: 12, name: 'Suzanne' },
      { id: 13, name: 'François' },
      { id: 14, name: 'Louise' },
      { id: 15, name: 'Robert' },
      { id: 16, name: 'Jean' },
      { id: 17, name: 'Laurent' },
      { id: 18, name: 'Luc' },
      { id: 19, name: 'Richard' },
      { id: 20, name: 'Jacques' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty, the method below returns the initial number (11).
  // If the heroes array is not empty, the method below returns the highest hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}