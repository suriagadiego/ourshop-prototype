import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AdvertisementsService {
  constructor() {}
  adc: string[] = [
    "assets/images/adver/adc1.jpg",
    "assets/images/adver/adc2.jpg",
    "assets/images/adver/adc3.jpg",
    "assets/images/adver/adc4.jpg"
  ];
}
