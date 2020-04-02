import { Component, OnInit } from "@angular/core";
import { AdvertisementsService } from "src/app/_services/advertisements.service";

@Component({
  selector: "app-adbig",
  templateUrl: "./adbig.component.html",
  styleUrls: ["./adbig.component.css"]
})
export class AdbigComponent implements OnInit {
  items: String[] = [
    // "assets/images/adver/adc1.jpg",
    // "assets/images/adver/adc2.jpg",
    // "assets/images/adver/adc3.jpg",
    // "assets/images/adver/adc4.jpg"
  ];
  constructor(private advertisementService: AdvertisementsService) {}

  ngOnInit() {
    this.items = this.advertisementService.adc;
  }
}
