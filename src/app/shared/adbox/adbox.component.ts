import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-adbox",
  templateUrl: "./adbox.component.html",
  styleUrls: ["./adbox.component.css"]
})
export class AdboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ads: string[] = [
    "assets/images/adver/1n.png",
    "assets/images/adver/2n.png",
    "assets/images/adver/3n.png",
    "assets/images/adver/4n.png",
    "assets/images/adver/5n.png",
    "assets/images/adver/6n.png"
  ];
}
