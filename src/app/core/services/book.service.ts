import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  addEntities,
  selectEntity,
  upsertEntities,
  getEntity,
} from '@ngneat/elf-entities';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/shared/models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookList: Book[] = [
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

  // create store
  private store = createStore({ name: 'cart' }, withEntities<Book>());

  // set store observable
  private bookStore$ = this.store.asObservable();

  // get cart items from store
  private data$ = this.bookStore$.pipe(selectAllEntities());

  constructor() {}

  getInitializeData(): Observable<Book[]> {
    this.store.update(addEntities(this.bookList)); // this could be replaced by a call to the API
    return this.data$;
  }

  selectEntityById(id: number): Observable<Book | undefined> {
    return this.store.pipe(selectEntity(id));
  }

  getEntityById(id: number): Book | undefined {
    return this.store.query(getEntity(id));
  }

  addEntity(item: Book, prepend = true): void {
    this.store.update(addEntities(item, { prepend: prepend }));
  }

  upsertEntity(item: Book): void {
    this.store.update(upsertEntities({ ...item }));
  }
}
