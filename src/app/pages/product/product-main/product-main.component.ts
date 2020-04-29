import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-main",
  templateUrl: "./product-main.component.html",
  styleUrls: ["./product-main.component.css"],
})
export class ProductMainComponent implements OnInit {
  @Input() samp: Array<any> = [];
  constructor() {}
  exam = this.samp;
  ngOnInit() {}
}
