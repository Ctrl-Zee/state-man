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
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // create store
  private store = createStore({ name: 'cart' }, withEntities<Book>());

  // set store observable
  private bookStore$ = this.store.asObservable();

  // get cart items from store
  private data$ = this.bookStore$.pipe(selectAllEntities());

  constructor(private apiService: ApiService) {}

  /**
   * Use this to initialize the observable in the facade
   * @returns Book stream of saved books
   */
  getData(): Observable<Book[]> {
    this.fetchBookList();
    return this.data$;
  }

  selectEntityById(id: number): Observable<Partial<Book>> {
    return this.store.pipe(
      selectEntity(id),
      map((book) => (book ? book : {}))
    );
  }

  addEntity(item: Book, prepend = true): void {
    this.store.update(addEntities(item, { prepend: prepend }));
  }

  upsertEntity(item: Book): void {
    const foundBook = this.selectEntityById(item.id);

    let book: Book;

    if (foundBook) {
      book = { ...item };
    } else {
      book = {
        ...item,
        id: Math.random() * 10000, // TODO: We should save the book to the database first and return it to the client
      };
    }

    this.store.update(upsertEntities({ ...book }));
  }

  /**
   * Gets all saved books from the API.
   *
   * NOTE: Therer is no need to unsubscribe from the HTTP observable.
   * The HTTP service calls complete after the data is returned.
   */
  fetchBookList(): void {
    this.apiService
      .doGet<Book[]>('bookList')
      .pipe(tap((data) => this.store.update(addEntities(data))))
      .subscribe();
  }
}
