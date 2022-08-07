import { Component, OnInit } from '@angular/core';
import { BookFacade } from 'src/app/core/services/book.facade';
import { BookService } from 'src/app/core/services/book.service';
import { CartFacade } from 'src/app/core/services/cart.facade';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-catalog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.scss'],
})
export class BookCatalogComponent implements OnInit {
  books$ = this.bookFacade.books$;
  // cart$ = this.cartFacade.cart$;
  // totalPrice$ = this.cartFacade.totalPrice$;
  // cartCount$ = this.cartFacade.cartCount$;

  constructor(private bookFacade: BookFacade, private cartFacade: CartFacade) {}

  ngOnInit() {}

  saveToCart(book: Book): void {
    this.cartFacade.addEntity(book);
  }

  upsertToCart(book: Book): void {
    this.cartFacade.upsertEntityByBook(book);
  }
}
