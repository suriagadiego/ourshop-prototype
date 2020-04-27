import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { ProductComponent } from './pages/product/product.component';
import { ProductMainComponent } from './pages/product/product-main/product-main.component';
import { ProductOptionsComponent } from './pages/product/product-options/product-options.component';
import { DeliveryOptionsComponent } from './pages/product/delivery-options/delivery-options.component';
import { ProductInfoComponent } from './pages/product/product-info/product-info.component';
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [AppComponent, ProductComponent, ProductMainComponent, ProductOptionsComponent, DeliveryOptionsComponent, ProductInfoComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    // Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
