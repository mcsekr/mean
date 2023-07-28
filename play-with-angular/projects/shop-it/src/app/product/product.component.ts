import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  @Input("value")
  product: any = {}



  top5Reviews: any[] = [
    { body: "Very good product", rating: 5, author: "who-1" },
    { body: "Bad product", rating: 1, author: "who-2" },
  ]

  // cartService: CartService = new CartService() 
  constructor(private cartService: CartService) { } // dependency injection

  currentTab = 1

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }
  handleBuy(event: MouseEvent) {
    this.cartService.addToCart({ id: this.product.id, name: this.product.name, price: this.product.price })
  }
  handleTabChange(event: MouseEvent, tabIndex: number) {
    this.currentTab = tabIndex
  }

}
