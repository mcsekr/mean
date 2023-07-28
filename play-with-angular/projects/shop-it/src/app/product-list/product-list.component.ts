import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // providers: [CartService]
})
export class ProductListComponent {


  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 10000,
      currencyCode: 'INR',
      makeDate: Date.now(),
      isAvailable: true,
      description: 'Laptop Description',
      imagePath: 'assets/images/Laptop.png'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 1000,
      currencyCode: 'INR',
      makeDate: Date.now(),
      isAvailable: true,
      description: 'Mobile Description',
      imagePath: 'assets/images/Mobile.png'
    }
  ]


}
