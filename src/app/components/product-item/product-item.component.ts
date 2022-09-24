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
  @Output() goToDetails = new EventEmitter();
  quantity = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onOptionChange(value: number): void {
    debugger;
    this.product.quantity = value;
  }

  onAddClicked(): void {
    alert('Added to cart');
    debugger;
    this.addToCart.emit(this.product);
  }
}
