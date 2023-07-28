import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-IT';
  isCartOpen: boolean = false;
  toggleCartView() {
    this.isCartOpen = !this.isCartOpen
  }
}
