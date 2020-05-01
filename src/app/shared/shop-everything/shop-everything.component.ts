import { Component, OnInit, HostListener } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { AdvertisementsService } from "src/app/_services/advertisements.service";
import { Router } from "@angular/router";

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
  itemProduct: Array<string> = [];
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = event.target.innerWidth;
    this.new = this.width - 250;
    console.log(this.width);
  }

  constructor(
    private productsService: ProductsService,
    private advertisementService: AdvertisementsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.items = this.productsService.items;
    this.adc = this.advertisementService.adc;
    this.width = window.innerWidth;
  }
  itemsPerSlide = 5;

  productDisplay(item) {
    this.router.navigate(["/product"]);
    this.itemProduct = item;
    console.log("data to be passed ", this.itemProduct);
  }

  get itemValue() {
    return this.itemProduct;
  }
}
