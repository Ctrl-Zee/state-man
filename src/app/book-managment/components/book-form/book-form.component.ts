import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input() book?: Book;

  form = this.formBuilder.group({
    title: [''],
    author: [''],
    pageCount: [''],
    price: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      const book = changes['book'].currentValue;
      console.log(book);
      this.patchForm(book);
    }
  }

  patchForm(book: Book) {
    this.form.patchValue({
      title: book.title,
      author: book.author,
      pageCount: book.pageCount?.toString(),
      price: book.price?.toString(),
    });
  }
}
