import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CartService {

  constructor() { }

  cart: Array<any> = []

  addToCart(item: any) {
    this.cart.push(item)
    console.log(this.cart);
  }

  removeFromCart(item: any) {
    this.cart.splice(this.cart.indexOf(item), 1)
  }

  getCart() {
    return this.cart
  }

}
