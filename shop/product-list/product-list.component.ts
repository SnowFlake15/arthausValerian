import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "src/app/products.service";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  category: any;
  authors: string[] = [];
  products: any = [];
  groupedProds: any = []
  constructor(
    private productSrvice: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get("category");
    this.getProducts().then();
    // this.getProds().then()
    //   await this.caller();
    // console.log(this.products)
  }

  async getProducts() {
    this.products = await this.productSrvice.getProducts();
    console.log(this.products);
    this.products = this.products.filter(
      (product: Product) => product.category === this.category
    );
    this.products.forEach((prod: Product) => {
      if (!this.authors.includes(prod.author)) {
        this.authors.push(prod.author);
      }
    });
    this.products.forEach((prod: Product) => {
      this.authors.forEach((author: string) =>{
        if(prod.author===author && !this.groupedProds.find((el: Product)=> el.author === author)){
          this.groupedProds.push({author: author, product: [prod]})
        }else if(prod.author===author && this.groupedProds.find((el: Product)=> el.author === author)){
          this.groupedProds.filter((el: any) => {
            if(el.author === author){
              el.product.push(prod)
            }
          })
        }
      })
    })
    console.log(this.groupedProds)
    console.log(this.authors);
  }
}
