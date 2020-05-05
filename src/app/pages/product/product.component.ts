import { Component, OnInit, Input } from "@angular/core";
import { ProductsService } from "src/app/_services/products.service";
import { ActivatedRoute } from "@angular/router"
import { Product } from "src/app/_models/product.model";
import { ShopEverythingComponent } from "src/app/shared/shop-everything/shop-everything.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  id: number;
  constructor(
      private productsService: ProductsService,
      private route: ActivatedRoute
    ) {}
  item
  @Input() itemProduct: Array<String> = [];

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.item = this.productsService.getItem(this.id)
  }
}
