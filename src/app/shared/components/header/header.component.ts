import { Component, OnInit } from '@angular/core';
import { CartFacade } from 'src/app/core/services/cart.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartCount$ = this.cartFacade.cartCount$;
  isSideBarVisible = false;
  isMenuOpen = false;
  active = false;

  constructor(private cartFacade: CartFacade) {}

  ngOnInit() {}

  toggleSideBar() {
    this.isSideBarVisible = !this.isSideBarVisible;
  }
}
