import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/_models/product.model";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  @Input() items: Array<any> = [];
  constructor() {}

  ngOnInit() {}
}
