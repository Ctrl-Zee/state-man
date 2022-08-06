import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import { withEntities, selectAllEntities } from '@ngneat/elf-entities';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root',
})
export class BookFacade {
  books$ = this.bookService.getInitializeData();

  constructor(private bookService: BookService) {}

  getBookById(id: number): Observable<Book | undefined> {
    return this.bookService.selectEntityById(id);
  }

  upsertBook(item: Book): void {
    const foundBook = this.bookService.selectEntityById(item.id);

    let book: Book;

    if (foundBook) {
      book = { ...item };
    } else {
      book = {
        ...item,
        id: Math.random() * 10000, // TODO: We should save the book to the database first and return it to the client
      };
    }

    this.bookService.upsertEntity(book);
  }
}
