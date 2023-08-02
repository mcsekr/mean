import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';
import { ReviewComponent } from './components/review/review.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DiscountPipe } from './pipes/discount.pipe';
import { ReviewFormComponent } from './components/review-form/review-form.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    DiscountPipe,
    ReviewFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
