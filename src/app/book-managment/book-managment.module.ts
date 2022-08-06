import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookManagmentRoutingModule } from './book-managment-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookManagmentComponent } from './components/book-managment/book-managment.component';
import { BookComponent } from './components/book/book.component';
import { BookFormComponent } from './components/book-form/book-form.component';

@NgModule({
  declarations: [BookManagmentComponent, BookComponent, BookFormComponent],
  imports: [CommonModule, BookManagmentRoutingModule, SharedModule],
})
export class BookManagmentModule {}
