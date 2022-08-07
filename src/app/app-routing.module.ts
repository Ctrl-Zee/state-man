import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./check-out/check-out.module').then((m) => m.CheckOutModule),
  },
  {
    path: 'sandbox',
    loadChildren: () =>
      import('./sand-box/sand-box.module').then((m) => m.SandBoxModule),
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./book-managment/book-managment.module').then(
        (m) => m.BookManagmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
