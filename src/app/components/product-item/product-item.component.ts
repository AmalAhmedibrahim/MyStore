import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart = new EventEmitter<Product>();
  quantity = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onOptionChange(value: number): void {
    this.quantity = value;
  }
  getProductDetails(product: Product): void {
    this.router.navigate(['/product', product.id], {
      state: {
        Product: product,
      },
    });
  }
  onAddClicked(): void {
    alert('Added to cart');
    this.addToCart.emit(this.product);
  }
}
