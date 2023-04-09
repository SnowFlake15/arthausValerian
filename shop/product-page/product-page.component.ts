import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  prodId: any;
  product: any;
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
  }
}
