import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
    declarations: [ProductCatalogComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        UtilsModule
    ],
})
export class ProductsModule { }
