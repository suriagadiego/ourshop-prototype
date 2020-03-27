import { Injectable } from "@angular/core";
import sampleitems from "../_files/sampleitems.json";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor() {}
  public items: { items: [] }[] = sampleitems.items;
}
