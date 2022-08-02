import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.scss'],
})
export class BookCatalogComponent implements OnInit {
  books$ = this.bookService.books$;

  constructor(private bookService: BookService) {}

  ngOnInit() {}
}
