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

  constructor() {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      quantity: 1,
      rating: {
        rate: 0,
        count: 0,
      },
    };
  }

  ngOnInit(): void {}

  onAddClicked(): void {
    alert('Added to cart');
    this.addToCart.emit(this.product);
  }
}
