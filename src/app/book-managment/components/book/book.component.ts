import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookFacade } from 'src/app/core/services/book.facade';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  book$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.bookFacade.getBookById(this.parseParam(params.get('id')))
    )
  );

  constructor(private route: ActivatedRoute, private bookFacade: BookFacade) {}

  ngOnInit() {}

  parseParam(param: string | null): number {
    return param ? parseInt(param) : 0;
  }
}
