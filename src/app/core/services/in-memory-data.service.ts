import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from 'src/app/shared/models/book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): { bookList: Book[] } {
    const bookList: Book[] = [
      {
        id: 1,
        title: 'The Fifth Season',
        author: 'N.K Jemisin',
        pageCount: 498,
        price: 14.39,
      },
      {
        id: 2,
        title: 'The Obelisk Gate',
        author: 'N.K Jemisin',
        pageCount: 433,
        price: 14.39,
      },
      {
        id: 3,
        title: 'The Stone Sky',
        author: 'N.K Jemisin',
        pageCount: 445,
        price: 14.39,
      },
      {
        id: 4,
        title: 'Altered Carbon',
        author: 'Richard K. Morgan',
        pageCount: 389,
        price: 11.99,
      },
      {
        id: 5,
        title: 'The Eye Of The World',
        author: 'Robert Jordan',
        pageCount: 814,
        price: 18.0,
      },
      {
        id: 6,
        title: 'Neuromancer',
        author: 'William Gibson',
        pageCount: 271,
        price: 9.99,
      },
      {
        id: 7,
        title: 'Fight Club',
        author: 'Chuck Palahniuk',
        pageCount: 218,
        price: 9.99,
      },
      {
        id: 8,
        title: 'A Wizard Of Earthsea',
        author: 'Ursula Le Guin',
        pageCount: 251,
        price: 11.99,
      },
      {
        id: 9,
        title: 'The Windup Girl',
        author: 'Paolo Bacigalupi',
        pageCount: 386,
        price: 18.0,
      },
      {
        id: 10,
        title: 'The Lies of Locke Lamora',
        author: 'Scott Lynch',
        pageCount: 537,
        price: 21.99,
      },
      {
        id: 11,
        title: 'The Blade Itself',
        author: 'Joe Abercrombie',
        pageCount: 542,
        price: 16.99,
      },
      {
        id: 12,
        title: 'Prince Of Thornes',
        author: 'Mark Lawrence',
        pageCount: 399,
        price: 12.99,
      },
    ];
    return { bookList };
  }

  // Overrides the genId method to ensure that a book always has an id.
  // If the book array is empty,
  // the method below returns the initial number (11).
  // if the bood array is not empty, the method below returns the highest
  // hero id + 1.
  genId(bookList: Book[]): number {
    return bookList.length > 0
      ? Math.max(...bookList.map((book) => book.id)) + 1
      : 13;
  }
}
