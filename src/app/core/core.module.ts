import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';
import { CartFacade } from './services/cart.facade';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [BookService, CartService, CartFacade],
})
export class CoreModule {}
