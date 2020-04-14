import { Component, OnInit, HostListener } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { AdvertisementsService } from "src/app/_services/advertisements.service";

@Component({
  selector: "app-shop-everything",
  templateUrl: "./shop-everything.component.html",
  styleUrls: ["./shop-everything.component.scss"]
})
export class ShopEverythingComponent implements OnInit {
  items: Array<any> = [];
  adc: String[] = [];
  width: number

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.width = event.target.innerWidth;
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
}
