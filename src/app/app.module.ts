import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// // import { HeaderComponent } from './shared//header/header.component';
// // import { AdboxComponent } from './shared/adbox/adbox.component';
// // import { ProductsComponent } from './shared/products/products.component';
// import { ShopEverythingComponent } from './shared/shop-everything/shop-everything.component';
// // import { FooterComponent } from './shared/footer/footer.component';
// // import { FulfillmentsComponent } from './shared/fulfillments/fulfillments.component';
// // import { AdbigComponent } from './shared/adbig/adbig.component';
// import { InflightDeliveryComponent } from './shared/inflight-delivery/inflight-delivery.component';
// // import { BrandsListComponent } from './shared/brands-list/brands-list.component';
// import { PickupAirportComponent } from './shared/pickup-airport/pickup-airport.component';
// import { HomeDeliveryComponent } from './shared/home-delivery/home-delivery.component';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
