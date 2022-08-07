import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
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
  @Input() book?: Partial<Book>;
  @Output() bookUpsertEvent = new EventEmitter<Book>();

  form = this.formBuilder.group({
    id: '',
    title: '',
    author: '',
    pageCount: '',
    price: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      const book = changes['book'].currentValue;
      this.patchForm(book);
    }
  }

  patchForm(book: Book) {
    this.form.patchValue({
      id: book.id?.toString() ?? '-1',
      title: book.title,
      author: book.author,
      pageCount: book.pageCount?.toString(),
      price: book.price?.toString(),
    });
  }

  submit(): void {
    const book: Book = {
      id: Number(this.form.controls['id']?.value ?? -1),
      title: this.form.controls['title']?.value ?? '',
      author: this.form.controls['author']?.value ?? '',
      pageCount: Number(this.form.controls['pageCount']?.value ?? 0),
      price: Number(this.form.controls['price']?.value ?? 0.0),
    };

    this.bookUpsertEvent.emit(book);
  }
}
