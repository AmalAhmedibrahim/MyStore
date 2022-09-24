import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<void>();
  @Input() title = '';

  constructor() {}

  ngOnInit(): void {}

  onBtnClick(): void {
    this.onClick.emit();
  }
}
