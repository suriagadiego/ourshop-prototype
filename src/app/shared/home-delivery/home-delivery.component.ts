import { Component, OnInit } from "@angular/core";
import sampleitems from "../../_files/sampleitems.json";
import { ProductsService } from "src/app/_services/products.service";

@Component({
  selector: "app-home-delivery",
  templateUrl: "./home-delivery.component.html",
  styleUrls: ["./home-delivery.component.scss"],
  providers: [ProductsService]
})
export class HomeDeliveryComponent implements OnInit {
  items: Array<any> = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.items = this.productsService.items;
  }
}
