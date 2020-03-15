import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  productModel = new Product("assets/images/products/CHIVAS XV.jfif","Chivas Regal","XV 1L","USD 200.00")

}
