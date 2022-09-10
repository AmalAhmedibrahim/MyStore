import { Product } from './../../../models/product.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity = 1;
  constructor() {}

  ngOnInit(): void {}

  onOptionChange(value: number): void {
    this.quantity = value;
  }

  onAddClicked(): void {
    alert('Added to cart');
  }
}
