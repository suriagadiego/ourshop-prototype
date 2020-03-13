import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdboxComponent } from './shared/adbox/adbox.component';
import { ProductsComponent } from './shared/products/products.component';
import { ShopEverythingComponent } from './shop-everything/shop-everything.component';
import { FooterComponent } from './footer/footer.component';
import { FulfillmentsComponent } from './fulfillments/fulfillments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdboxComponent,
    ProductsComponent,
    ShopEverythingComponent,
    FooterComponent,
    FulfillmentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
