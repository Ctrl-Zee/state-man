import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookManagmentComponent } from './components/book-managment/book-managment.component';
import { BookComponent } from './components/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BookManagmentComponent,
  },
  { path: 'book', redirectTo: 'book/', pathMatch: 'full' },
  { path: 'book/:id', component: BookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookManagmentRoutingModule {}
