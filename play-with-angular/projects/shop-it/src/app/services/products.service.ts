import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { Review } from '../model/review';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Array<Product>> {
    return this.httpClient.get<any>("http://localhost:4200/assets/data/products.json")
      .pipe(map((response: any) => response.products))
  }
  getReviews(id: number): Observable<Array<Review>> {
    return this.httpClient.get("http://localhost:4200/assets/data/reviews.json")
      .pipe(map((response: any) => response["reviews"][id]))
  }
  addReview(id: number, review: Review) {
    //return this.httpClient.post<Review>("http://localhost:4200/assets/data/reviews.json", review)
    return null;
  }

}
