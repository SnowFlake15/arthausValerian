import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  prodId: any;
  product: any;
  productsCategorised : any;
  constructor(
    private productSrvice: ProductsService,
    private route: ActivatedRoute
  ){}
  ngOnInit() {
    this.prodId = this.route.snapshot.paramMap.get("id");
    this.getProduct().then();
  }
  async getProduct() {
    this.product = await this.productSrvice.getProdOne(this.prodId);
    console.log(this.product)
    this.productsCategorised = await this.productSrvice.getProdsByCategory(
      this.product?.category
    );
    console.log(this.productsCategorised);
  }
}
