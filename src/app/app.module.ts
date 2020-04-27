import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { ProductComponent } from './pages/product/product.component';
// import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    // Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
