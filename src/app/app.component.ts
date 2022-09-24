import { ProductsService } from 'src/app/services/products.service';
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
  constructor(private productsService: ProductsService) {}

  addToCart(product: Product): void {
    this.productsService.addProductTocart(product);
  }

  goToDetails(product: Product): void {
    this.showDetails = true;
    this.productDetails = product;
  }
}
