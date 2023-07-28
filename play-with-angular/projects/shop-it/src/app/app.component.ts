import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT';
  cart: Array<any> = [];

  isCartOpen: boolean = false;

  handleBuy(event: any) {
    let product = event;
    //this.cart.push(product);
    this.cart = this.cart.concat(product);
    console.log(this.cart);
  }
  toggleCartView() {
    this.isCartOpen = !this.isCartOpen
  }
}
