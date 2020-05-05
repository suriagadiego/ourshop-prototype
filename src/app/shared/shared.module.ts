import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdbigComponent } from "./adbig/adbig.component";
import { AdboxComponent } from "./adbox/adbox.component";
import { FooterComponent } from "./footer/footer.component";
import { BrandsListComponent } from "./brands-list/brands-list.component";
import { FulfillmentsComponent } from "./fulfillments/fulfillments.component";
import { HeaderComponent } from "./header/header.component";
import { InflightDeliveryComponent } from "./inflight-delivery/inflight-delivery.component";
import { HomeDeliveryComponent } from "./home-delivery/home-delivery.component";
import { PickupAirportComponent } from "./pickup-airport/pickup-airport.component";
import { ShopEverythingComponent } from "./shop-everything/shop-everything.component";
import { AppRoutingModule } from "../app-routing.module";
import { WindowSizeDirective } from "../_directives/window-size.directive";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ProductsComponent } from "./products/products.component";

@NgModule({
  declarations: [
    HeaderComponent,
    AdbigComponent,
    ProductsComponent,
    AdboxComponent,
    BrandsListComponent,
    FooterComponent,
    FulfillmentsComponent,
    HeaderComponent,
    InflightDeliveryComponent,
    HomeDeliveryComponent,
    PickupAirportComponent,
    ShopEverythingComponent,
    WindowSizeDirective,
  ],
  imports: [CommonModule, AppRoutingModule, CarouselModule.forRoot()],
  exports: [
    HeaderComponent,
    AdbigComponent,
    AdboxComponent,
    BrandsListComponent,
    FooterComponent,
    FulfillmentsComponent,
    HeaderComponent,
    InflightDeliveryComponent,
    HomeDeliveryComponent,
    PickupAirportComponent,
    ShopEverythingComponent,
    ProductsComponent,
  ],
})
export class SharedModule {}
