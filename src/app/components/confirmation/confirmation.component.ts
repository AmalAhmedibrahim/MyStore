import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() name = '';
  amount = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickBack(): void {
    this.router.navigate([`/products`]);
  }
}
