import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-inflight-delivery",
  templateUrl: "./inflight-delivery.component.html",
  styleUrls: ["./inflight-delivery.component.scss"]
})
export class InflightDeliveryComponent implements OnInit {
  items: Array<any> = [];
  public innerWidth: any;
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    console.log("HELLO ") 
    this.items = this.productsService.items;
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.innerWidth = window.innerWidth
      console.log("inflight " + innerWidth)
    })
}
}
