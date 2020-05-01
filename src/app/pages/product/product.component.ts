import { Component, OnInit, Input } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { Product } from "src/app/_models/product.model";
import { ShopEverythingComponent } from "src/app/shared/shop-everything/shop-everything.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  item: Array<any> = [];
  @Input() itemProduct: Array<String> = [];

  ngOnInit() {
    // this.samp = this.productsService.sampol;
    this.item = ShopEverythingComponent.itemValue();
    console.log("TO RCV");
  }
}
