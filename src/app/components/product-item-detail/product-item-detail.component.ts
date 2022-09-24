import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Navigation, Router } from '@angular/router';
import { Product } from './../../models/product.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  @Output() addToCart = new EventEmitter<Product>();
  @Input() product: Product;
  @Output() back = new EventEmitter();

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      category: '',
      url: '',
      quantity: 1,
      rating: {
        rate: 0,
        count: 0,
      },
    };
  }

  ngOnInit(): void {}

  onOptionChange(value: number): void {
    this.product.quantity = value;
  }

  onAddClicked(): void {
    alert('Added to cart');
    this.addToCart.emit(this.product);
  }
}
