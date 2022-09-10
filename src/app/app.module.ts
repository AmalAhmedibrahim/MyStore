import { ProductsService } from './services/products.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item/product-item.component';
import { TruncatePipe } from 'src/pipes/truncate.pipe';
import { SelectListComponent } from './components/select-list/select-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    ProductItemComponent,
    TruncatePipe,
    SelectListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
