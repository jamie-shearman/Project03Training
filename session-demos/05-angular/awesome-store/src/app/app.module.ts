import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProductCatalogComponent } from './products/product-catalog/product-catalog.component';

@NgModule(
    {
        declarations: [
            AppComponent,
            HelloComponent,
            NavbarComponent,
            AboutComponent
        ],
        imports: [
            BrowserModule,
            ProductsModule,
            RouterModule.forRoot([
                { path: '', component: AboutComponent },
                { path: 'products', component: ProductCatalogComponent }
            ])
        ],
        providers: [],
        bootstrap: [AppComponent]
    }
)
export class AppModule { }
