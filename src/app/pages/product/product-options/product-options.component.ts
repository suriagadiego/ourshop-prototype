import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-options",
  templateUrl: "./product-options.component.html",
  styleUrls: ["./product-options.component.css"],
})
export class ProductOptionsComponent implements OnInit {
  @Input("prodItem") items: Array<string> = [];
  constructor() {}

  ngOnInit() {}
}
