import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdboxComponent } from './shared/adbox/adbox.component';
import { ProductsComponent } from './shared/products/products.component';
import { ShopEverythingComponent } from './shop-everything/shop-everything.component';
import { FooterComponent } from './footer/footer.component';
import { FulfillmentsComponent } from './fulfillments/fulfillments.component';
import { AdbigComponent } from './adbig/adbig.component';
import { InflightDeliveryComponent } from './inflight-delivery/inflight-delivery.component';
import { BrandsListComponent } from './shared/brands-list/brands-list.component';
import { PickupAirportComponent } from './pickup-airport/pickup-airport.component';
import { HomeDeliveryComponent } from './home-delivery/home-delivery.component';


const appRoutes: Routes = [
  { path: '', component: ShopEverythingComponent },
  { path: 'shop-everything', component: ShopEverythingComponent },
  { path: 'inflight-delivery', component: InflightDeliveryComponent },
  { path: 'pickup-at-airport', component: PickupAirportComponent },
  { path: 'home-delivery', component: HomeDeliveryComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdboxComponent,
    ProductsComponent,
    ShopEverythingComponent,
    FooterComponent,
    FulfillmentsComponent,
    AdbigComponent,
    InflightDeliveryComponent,
    BrandsListComponent,
    PickupAirportComponent,
    HomeDeliveryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
