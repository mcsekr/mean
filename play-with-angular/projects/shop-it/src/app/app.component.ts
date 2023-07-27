import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'shop-IT';
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 10000,
      isAvailable: true,
      description: 'Laptop Description',
      imagePath: 'assets/images/Laptop.png'
    },
    // {
    //   id: 2,
    //   name: 'Mobile',
    //   price: 1000,
    //   isAvailable: true,
    //   description: 'Mobile Description',
    //   imagePath: 'assets/images/Mobile.png'
    // }
  ]

  currentTab=1

  isTabSelected(tabIndex:number){
    return this.currentTab===tabIndex
  }

  handleBuy(event: MouseEvent) {
    console.log("handling buy ");
    console.log(event);
  }
  handleTabChange(event: MouseEvent,tabIndex:number) {
    this.currentTab=tabIndex
  }

}
