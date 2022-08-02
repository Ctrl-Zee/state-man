import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BookCatalogComponent } from './components/product-catalog/book-catalog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BookCatalogComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
