import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-options",
  templateUrl: "./product-options.component.html",
  styleUrls: ["./product-options.component.css"],
})
export class ProductOptionsComponent implements OnInit {
  @Input() samp: Array<String> = [];
  constructor() {}

  ngOnInit() {}

  get() {
    return "hello ^___^";
  }
}
