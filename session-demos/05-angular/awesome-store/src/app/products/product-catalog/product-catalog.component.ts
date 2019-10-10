import { Component, OnInit } from '@angular/core';
import { IProduct } from '../IProduct';
import { ProductsService } from '../products.service';

@Component(
    {
        selector: 'app-product-catalog',
        templateUrl: './product-catalog.component.html',
        styleUrls: ['./product-catalog.component.css']
    }
)
export class ProductCatalogComponent {
    title: string = 'Product Catalog';
    products: IProduct[];

    constructor( private productsService : ProductsService ) {
        this.productsService.getProducts().subscribe(
            // success
            ( products : IProduct[] ) => {
                this.products = products;
            }
        )
    }
}