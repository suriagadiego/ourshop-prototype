import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";

@Component({
  selector: "app-inflight-delivery",
  templateUrl: "./inflight-delivery.component.html",
  styleUrls: ["./inflight-delivery.component.scss"]
})
export class InflightDeliveryComponent implements OnInit {
  items: Array<any> = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.items = this.productsService.items;
  }
}
