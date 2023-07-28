import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { ReviewComponent } from './review/review.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { HighlightDirective } from './highlight.directive';
import { DiscountPipe } from './discount.pipe';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    CartBadgeComponent,
    ReviewComponent,
    CartViewComponent,
    HighlightDirective,
    DiscountPipe
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    //CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
