import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() name = '';
  @Input() amount = 0;
  @Output() back = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickBack(): void {
    this.back.emit();
  }
}
