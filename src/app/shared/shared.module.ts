import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SelectListComponent } from './select-list/select-list.component';

@NgModule({
  declarations: [ButtonComponent, SelectListComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, SelectListComponent],
})
export class SharedModule {}
