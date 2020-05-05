import { Injectable } from "@angular/core";
import sampleitems from "../_files/sampleitems.json";
import sample_product from "../_files/sample_product.json";
// import { ShopEverythingComponent } from

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  public items: { items: [] }[] = sampleitems.items;
  public sampol: { sampol: [] }[] = sample_product;
  public item: { item: [] }[] = sample_product;
}
