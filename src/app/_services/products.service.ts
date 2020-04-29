import { Injectable } from "@angular/core";
import sampleitems from "../_files/sampleitems.json";
import sample_product from "../_files/sample_product.json";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}
  public items: { items: [] }[] = sampleitems.items;
  public sampol: { sampol: [] }[] = sample_product;
}
