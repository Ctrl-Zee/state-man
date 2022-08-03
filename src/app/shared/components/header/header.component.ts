import { Component, OnInit } from '@angular/core';
import { CartFacade } from 'src/app/core/services/cart.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartCount$ = this.cartFacade.cartCount$;

  constructor(private cartFacade: CartFacade) {}

  ngOnInit() {}
}
