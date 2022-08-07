import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { BookService } from './services/book.service';
import { CartService } from './services/cart.service';
import { CartFacade } from './services/cart.facade';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    HttpClientModule,
  ],
  providers: [
    BookService,
    CartService,
    CartFacade,
    ApiService,
    InMemoryDataService,
  ],
})
export class CoreModule {}
