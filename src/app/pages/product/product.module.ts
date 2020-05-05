import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductComponent } from "./product.component";
import { ProductMainComponent } from "./product-main/product-main.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { ProductOptionsComponent } from "./product-options/product-options.component";
import { DeliveryOptionsComponent } from "./delivery-options/delivery-options.component";

@NgModule({
  declarations: [
    ProductComponent,
    ProductMainComponent,
    ProductInfoComponent,
    ProductOptionsComponent,
    DeliveryOptionsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [],
})
export class ProductModule {}
