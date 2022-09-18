import { Product } from './../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public cartItems = [];
  public products = new Subject();

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  // Add single  to the cart
  addProductToCart(product): void {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  getCartProducts(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.products.asObservable();
  }
}
