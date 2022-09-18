import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css'],
})
export class SelectListComponent implements OnInit {
  @Output() option = new EventEmitter<number>();
  @Input() value: number;
  options: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  onSelect(value: number): void {
    this.option.emit(value);
  }
}
