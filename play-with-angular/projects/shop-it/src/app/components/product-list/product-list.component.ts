import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [CartService]
})
export class ProductListComponent {

  products: Array<Product> = []

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe({
        next: (products: Array<Product>) => {
          this.products = products
        },
        error: (error) => console.log(error)
      })
  }


}
