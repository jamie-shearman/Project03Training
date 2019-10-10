import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductsService {
    constructor( private httpClient : HttpClient ) {
    }

    getProducts() {
        // Angular works with Observables instead of Promise

        // get(), put(), post(), delete() return Observables (not Promises)
        return this.httpClient.get( 'https://awesome-store-server.herokuapp.com/products' );
    }
}
