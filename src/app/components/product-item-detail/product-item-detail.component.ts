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
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.product = {
      id: '',
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    };
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productsService.getProducts().subscribe((productsRes) => {
      this.product = productsRes.find((p) => +p.id === +id);
    });
  }

  onAddClicked(): void {
    alert('Added to cart');
    this.productsService.addProductToCart(this.product);
  }
}
