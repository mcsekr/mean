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
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';
import { ordersViewActivateGuard } from './guards/orders-view-activate.guard';
import { ordersViewDeactivateGuard } from './guards/orders-view-deactivate.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartViewComponent },
  {
    path: 'orders',
    component: OrdersViewComponent,
    canActivate: [ordersViewActivateGuard],
    canDeactivate: [ordersViewDeactivateGuard]
  },
  { path: '**', component: NotFoundComponent }
]

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
    ReviewFormComponent,
    HomeComponent,
    NotFoundComponent,
    OrdersViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
