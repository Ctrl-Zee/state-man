import { Component, OnInit } from '@angular/core';
import { BookFacade } from 'src/app/core/services/book.facade';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-managment',
  templateUrl: './book-managment.component.html',
  styleUrls: ['./book-managment.component.scss'],
})
export class BookManagmentComponent implements OnInit {
  books$ = this.bookFacade.books$;

  constructor(private bookFacade: BookFacade) {}

  ngOnInit() {}

  editBook(book: Book) {
    // console.log(book);
  }
}
