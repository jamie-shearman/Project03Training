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
    filteredProducts: IProduct[];
    displayHeading = false;
    displayImages = true;
    buttonText = 'Hide images';
    filterKey = 'abc';

    constructor( private productsService : ProductsService ) {
        this.productsService.getProducts().subscribe(
            // success
            ( products : IProduct[] ) => {
                this.products = products;
                this.filteredProducts = this.products;
            }
        )
    }

    toggleImages() {
        if( this.displayImages === true ) {
            this.displayImages = false;
            this.buttonText = 'Show images';
        } else {
            this.displayImages = true;
            this.buttonText = 'Hide images';
        }
    }

    filter() {
        console.log( this.filterKey );

        const selectProductsThatMatchFilterKey = ( product ) => {
            return product.name.toUpperCase().indexOf( this.filterKey.toUpperCase() ) !== -1;
        };

        this.filteredProducts = this.products.filter( selectProductsThatMatchFilterKey );
    }
}