import { Component } from '@angular/core';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyStore';
  showCart = false;
  cartProducts: Product[] = [];
  showDetails = false;
  productDetails: Product;
  constructor() {}

  addToCart(product: Product): void {
    debugger;
    if (this.cartProducts.findIndex((p) => p.id === product.id) === -1) {
      this.cartProducts.push(product);
    } else {
      const index = this.cartProducts.findIndex((p) => p.id === product.id);
      this.productDetails[index] = product;
    }
  }

  goToDetails(product: Product): void {
    this.showDetails = true;
    this.productDetails = product;
  }
}
