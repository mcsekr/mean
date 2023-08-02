import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';
import { Review } from '../../model/review';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  @Input("value")
  product!: Product


  top5Reviews: Array<Review> = []

  // cartService: CartService = new CartService() 
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) { } // dependency injection

  currentTab = 3

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }
  handleBuy(event: MouseEvent) {
    this.cartService.addToCart({ id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1 })
  }
  handleTabChange(event: MouseEvent, tabIndex: number) {
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.productsService.getReviews(this.product.id)
        .subscribe({
          next: (reviews: Array<Review>) => {
            this.top5Reviews = reviews
          }
        })
    }
  }

  handleNewReview(review: Review) {
    //this.productsService.addReview(this.product.id, review)
    this.top5Reviews.push(review)
  }

}
