import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { CartItem } from 'src/app/shared/models/cart-item';
import { CartService } from './cart.service';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class CartFacade {
  cart$ = this.cartService.getDataEntities();

  totalPrice$ = this.cartService.getAllEntities().pipe(
    map((items: CartItem[]) => {
      return items
        .map((item) => item.book.price * item.quantity)
        .reduce((acc, val) => acc + val, 0);
    })
  );

  cartCount$ = this.cartService.getAllEntities().pipe(
    map((items: CartItem[]) => {
      return items
        .map((item) => item.quantity)
        .reduce((acc, val) => acc + val, 0);
    })
  );

  constructor(private cartService: CartService) {}

  addEntity(item: Book): void {
    const cartItem = { id: Guid.create().toString(), book: item, quantity: 1 };
    this.cartService.addEntity(cartItem);
  }

  upsertEntityByBook(item: Book): void {
    const foundItem = this.cartService.filterEntitiesByTitle(item.title)[0];

    let cartItem: CartItem;

    if (foundItem) {
      cartItem = { ...foundItem, quantity: foundItem.quantity + 1 };
    } else {
      cartItem = {
        id: Guid.create().toString(),
        book: item,
        quantity: 1,
      };
    }

    this.cartService.upsertEntity(cartItem);

    // this.store.update(upsertEntities({ ...cartItem }));
  }
}
