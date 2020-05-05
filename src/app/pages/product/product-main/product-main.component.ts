import { Component, OnInit, Input } from "@angular/core";
import { ProductInfoComponent } from "../product-info/product-info.component";

@Component({
  selector: "app-product-main",
  templateUrl: "./product-main.component.html",
  styleUrls: ["./product-main.component.css"],
})
export class ProductMainComponent implements OnInit {
  @Input() samp: Array<any> = [];
  constructor() {}
  hehe: string;
  ngOnInit() {
    console.log(
      "This is product main"
      // this.samp.extension_attributes[0].seller.shop_name
      // this.hehe = ProductInfoComponent.le
    );
  }
}
