import { Book } from './book';

export interface CartItem {
  id: string; // make a guid
  book: Book;
  quantity: number;
}
