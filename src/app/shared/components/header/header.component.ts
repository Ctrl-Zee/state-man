import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, combineLatest } from 'rxjs';
import { CartFacade } from 'src/app/core/services/cart.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartCount$ = this.cartFacade.cartCount$;

  constructor(private router: Router, private cartFacade: CartFacade) {}

  ngOnInit() {}

  cart(): void {
    this.router.navigateByUrl('/cart');
  }
}
