import { Product } from './../../models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cart: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.productsService.getCart().subscribe((data) => {
    //   debugger;
    // });
    this.productsService.getCartProducts().subscribe((res) => {
      debugger;
      console.log(res);
    });
  }
}
