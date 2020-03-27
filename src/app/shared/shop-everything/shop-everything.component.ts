import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";

@Component({
  selector: "app-shop-everything",
  templateUrl: "./shop-everything.component.html",
  styleUrls: ["./shop-everything.component.scss"]
})
export class ShopEverythingComponent implements OnInit {
  items: Array<any> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.items = this.productsService.items;
  }
}
