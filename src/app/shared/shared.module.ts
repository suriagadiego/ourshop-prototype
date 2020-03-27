import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdbigComponent } from "./adbig/adbig.component";
import { AdboxComponent } from "./adbox/adbox.component";
import { FooterComponent } from "./footer/footer.component";
import { BrandsListComponent } from "./brands-list/brands-list.component";
import { FulfillmentsComponent } from "./fulfillments/fulfillments.component";
import { HeaderComponent } from "./header/header.component";
import { ProductsComponent } from "./products/products.component";
import { InflightDeliveryComponent } from "./inflight-delivery/inflight-delivery.component";
import { HomeDeliveryComponent } from "./home-delivery/home-delivery.component";
import { PickupAirportComponent } from "./pickup-airport/pickup-airport.component";
import { ShopEverythingComponent } from "./shop-everything/shop-everything.component";
import { AppRoutingModule } from "../app-routing.module";
import { Ng2CarouselamosModule } from "ng2-carouselamos";

@NgModule({
  declarations: [
    AdbigComponent,
    AdboxComponent,
    BrandsListComponent,
    FooterComponent,
    FulfillmentsComponent,
    HeaderComponent,
    ProductsComponent,
    InflightDeliveryComponent,
    HomeDeliveryComponent,
    PickupAirportComponent,
    ShopEverythingComponent
  ],
  imports: [CommonModule, AppRoutingModule, Ng2CarouselamosModule],
  exports: [
    AdbigComponent,
    AdboxComponent,
    BrandsListComponent,
    FooterComponent,
    FulfillmentsComponent,
    HeaderComponent,
    ProductsComponent,
    InflightDeliveryComponent,
    HomeDeliveryComponent,
    PickupAirportComponent,
    ShopEverythingComponent
  ]
})
export class SharedModule {}
