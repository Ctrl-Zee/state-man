import { Component, OnInit } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { CartFacade } from 'src/app/core/services/cart.facade';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  cartVM$ = combineLatest([
    this.cartFacade.cart$,
    this.cartFacade.totalPrice$,
    this.cartFacade.cartCount$,
  ]).pipe(
    map(([cart, totalPrice, cartCount]) => {
      return {
        cart,
        totalPrice,
        cartCount,
      };
    })
  );

  constructor(private cartFacade: CartFacade) {}

  ngOnInit() {}
}
