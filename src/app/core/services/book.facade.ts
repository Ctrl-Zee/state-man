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
  books$ = this.bookService.getData();

  constructor(private bookService: BookService) {}

  getBookById(id: number): Observable<Partial<Book>> {
    return this.bookService.selectEntityById(id);
  }

  upsertBook(item: Book): void {
    this.bookService.upsertEntity(item);
  }
}
