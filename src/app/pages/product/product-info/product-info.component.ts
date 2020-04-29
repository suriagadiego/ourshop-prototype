import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.css"],
})
export class ProductInfoComponent implements OnInit {
  @Input() exam: Array<string> = [];
  constructor() {}

  ngOnInit() {
    console.log(this.exam);
  }
}
