import { Product } from './../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cartProducts: Product[];
  private jsonURL = './assets/data.json';
  constructor(private http: HttpClient) {
    this.cartProducts = [];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonURL);
  }

  addProductTocart(product: Product): void {
    if (this.cartProducts.findIndex((p) => p.id === product.id) === -1) {
      this.cartProducts.push(product);
    } else {
      const index = this.cartProducts.findIndex((p) => p.id === product.id);
      this.cartProducts[index] = product;
    }
  }

  getCartProducts(): Product[] {
    return this.cartProducts;
  }

  removeProductsFromCart(product: Product): Product[] {
    this.cartProducts = this.cartProducts.filter((p) => p.id !== product.id);
    return this.cartProducts;
  }
}
