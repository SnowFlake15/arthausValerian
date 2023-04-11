import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: any;
  headers = new Headers();
  constructor(
    private productSrvice: ProductsService,
    private http: HttpClient,
    private httpClient: HttpClient
  ) {}
  private url = 'http://jsonplaceholder.typicode.com/posts';

  // URL = 'https://jsonplaceholder.typicode.com/todos';
  URL = 'http://localhost:8080/api/products';
  prods: any = [];
  posts: any;

  // constructor() {}

  ngOnInit() {
    // this.getProducts().then();
    // console.log(this.products);
    this.getProds().then()
    //   await this.caller();
    // console.log(this.products)
  }
  async caller() {
    // this.products = await this.productSrvice.getJSON();
  }
  async getProducts() {
    this.products = await this.productSrvice.getProducts();
  }

  async getProds() {
    // fetch('https://dummyjson.com/products/')
    // .then(res => res.json())
    // .then(json => console.log(json))
    this.prods = await this.productSrvice.getProds()
    console.log(this.prods)
    // try {
    //   this.products = this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(res=>res)
    //   // this.productSrvice.getProducts().subscribe(res=>this.products = res)
    //   console.log(this.products)
    // } catch (err) {
    //   // console.log(err);
    // }
  }
}
