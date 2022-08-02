import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';

@NgModule({
  declarations: [ProductCatalogComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
