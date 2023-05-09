import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/cart.service";
import { Product } from "src/app/models/product";
import { ProductsService } from "src/app/products.service";
import Swiper from "swiper";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  prodId: any;
  product: any;
  productsCategorised: any;
  constructor(
    private productSrvice: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit() {
    this.prodId = this.route.snapshot.paramMap.get("id");
    this.getProduct().then();
  }
  async getProduct() {
    this.product = await this.productSrvice.getProdOne(this.prodId);
    this.productsCategorised = await this.productSrvice.getProdsByCategory(
      this.product?.category
    );
  }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
