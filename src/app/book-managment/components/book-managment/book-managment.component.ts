import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookFacade } from 'src/app/core/services/book.facade';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-managment',
  templateUrl: './book-managment.component.html',
  styleUrls: ['./book-managment.component.scss'],
})
export class BookManagmentComponent implements OnInit {
  books$ = this.bookFacade.books$;

  constructor(private bookFacade: BookFacade, private router: Router) {}

  ngOnInit() {}

  editBook(book: Book) {
    this.router.navigate([`manage/book/${book.id}`]);
  }
}
