import { Product } from 'src/app/models/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cartProducts: Product[] = [];
  @Output() done = new EventEmitter();
  orderDone = false;
  orderDetails = {
    name: '',
    address: '',
    card: '',
  };
  total = 0;
  submit = false;

  constructor() {}

  ngOnInit(): void {
    this.total = this.cartProducts.reduce((sum, current) => {
      return sum + current.price * current.quantity;
    }, 0);
  }

  submitOrder(orderForm: NgForm): void {
    this.submit = true;
    if (orderForm.valid) {
      this.orderDone = true;
    }
  }
  removeFromCart(product: Product): void {
    this.cartProducts = this.cartProducts.filter((p) => p.id !== product.id);
    alert('Product removed from the cart');
  }
  onOptionChange(value: number, product: Product): void {
    this.total = 0;
    product.quantity = value;

    const index = this.cartProducts.findIndex((p) => p.id === product.id);
    this.cartProducts[index] = product;

    this.total = this.cartProducts.reduce((sum, current) => {
      return sum + current.price * current.quantity;
    }, 0);
  }
}
