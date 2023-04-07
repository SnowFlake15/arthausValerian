import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() category: string;
  products: any = [];
    constructor(
    private productSrvice: ProductsService,
  ) {}

  async getProducts() {
    this.products = await this.productSrvice.getProducts();
  }
}
