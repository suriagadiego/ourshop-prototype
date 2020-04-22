import { Component, OnInit, HostListener } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { AdvertisementsService } from "src/app/_services/advertisements.service";

@Component({
  selector: "app-shop-everything",
  templateUrl: "./shop-everything.component.html",
  styleUrls: ["./shop-everything.component.scss"],
})
export class ShopEverythingComponent implements OnInit {
  items: Array<any> = [];
  adc: String[] = [];
  width: number;
  new: number;
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = event.target.innerWidth;
    this.new = this.width - 250;
    console.log(this.width);
  }

  constructor(
    private productsService: ProductsService,
    private advertisementService: AdvertisementsService
  ) {}

  ngOnInit() {
    this.items = this.productsService.items;
    this.adc = this.advertisementService.adc;
    this.width = window.innerWidth;
  }
  itemsPerSlide = 3;
 
  slides = [
    {image: 'assets/images/1.jpg'},
    {image: 'assets/images/2.jpg'},
    {image: 'assets/images/3.jpg'},
    {image: 'assets/images/4.jpg'},
    {image: 'assets/images/5.jpg'},
    {image: 'assets/images/6.jpg'},
    {image: 'assets/images/1.jpg'},
    {image: 'assets/images/2.jpg'}
  ];
}
