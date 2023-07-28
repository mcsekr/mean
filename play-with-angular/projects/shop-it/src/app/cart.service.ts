import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    console.log("CartService::constructor");
  }

  cart: Array<any> = []
  cart$ = new BehaviorSubject<Array<any>>(this.cart)

  addToCart(item: any) {
    this.cart.push(item)
    this.cart$.next(this.cart)
  }

  removeFromCart(item: any) {
    this.cart.splice(this.cart.indexOf(item), 1)
  }

  getCart() {
    return this.cart
  }

}
