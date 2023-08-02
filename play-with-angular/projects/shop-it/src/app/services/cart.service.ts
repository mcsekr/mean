import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartLine } from '../model/cart-line';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    console.log("CartService::constructor");
  }

  cart: Array<CartLine> = []
  cart$ = new BehaviorSubject<Array<any>>(this.cart)

  addToCart(item: CartLine) {
    this.cart.push(item)
    this.cart$.next(this.cart)
  }

  removeFromCart(item: CartLine) {
    this.cart.splice(this.cart.indexOf(item), 1)
  }

  getCart() {
    return this.cart
  }

}
