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
    "assets/images/adver/1.jpg",
    "assets/images/adver/2.jpg",
    "assets/images/adver/3.jpg",
    "assets/images/adver/4.jpg",
    "assets/images/adver/5.jpg",
    "assets/images/adver/6.jpg"
  ];
}
