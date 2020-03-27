import { Component, OnInit } from "@angular/core";
import categories from "../../_files/categories.json";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  img: string = "./pictures/ourshop-logo.png";

  ngOnInit() {}
  public categories: { name: string }[] = categories;
}
