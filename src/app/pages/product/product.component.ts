import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  samp: Array<any> = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.samp = this.productsService.sampol;
  }
}
