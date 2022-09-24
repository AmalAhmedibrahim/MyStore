import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Output() addToCart = new EventEmitter<Product>();
  @Output() goToDetails = new EventEmitter<Product>();

  products: Product[];
  ProductDetails: Product;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((productsRes) => {
      this.products = productsRes;
    });
  }

  onAddClicked(product: Product): void {
    this.addToCart.emit(product);
  }
}
