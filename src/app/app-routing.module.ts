import { NgModule } from "@angular/core";
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

//components
import { ShopEverythingComponent } from "./shared/shop-everything/shop-everything.component";
import { InflightDeliveryComponent } from "./shared/inflight-delivery/inflight-delivery.component";
import { PickupAirportComponent } from "./shared/pickup-airport/pickup-airport.component";
import { HomeDeliveryComponent } from "./shared/home-delivery/home-delivery.component";
import { ProductComponent } from "./pages/product/product.component";

const appRoutes: Routes = [
  { path: "", component: ShopEverythingComponent },
  { path: "shop-everything", component: ShopEverythingComponent },
  { path: "inflight-delivery", component: InflightDeliveryComponent },
  { path: "pickup-at-airport", component: PickupAirportComponent },
  { path: "home-delivery", component: HomeDeliveryComponent },
  { path: "product", component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
