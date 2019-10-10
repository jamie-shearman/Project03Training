import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductCatalogComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
})
export class ProductsModule { }
