import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cart: Array<any> = [];

  @ContentChild("h")
  header!: ElementRef;

  @ViewChild("cartTable")
  table!: ElementRef;


  constructor(private cartService: CartService) {
    console.log("CartViewComponent::constructor");
    // todo one-time intialization
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("CartViewComponent::ngOnChanges");
    console.log(changes);
    // todo any side-effects when component receives changes
  }

  ngOnInit() {
    console.log("CartViewComponent::ngOnInit");
    // todo one-time initialization
    this.cart = this.cartService.getCart();
  }

  ngAfterContentInit() {
    console.log("CartViewComponent::ngAfterContentInit");
    // todo any side-effects when component content initialized
    let ele = this.header.nativeElement
    ele.style.color = "tomato"
    ele.style.fontSize = "1em"
  }

  ngAfterViewInit() {
    console.log("CartViewComponent::ngAfterViewInit");
    // todo any side-effects when component view initialized
    console.log(this.table.nativeElement);
  }

  ngOnDestroy() {
    console.log("CartViewComponent::ngOnDestroy");
    // todo any clean-up when component is destroyed
  }

}
