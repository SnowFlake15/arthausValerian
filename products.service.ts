import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { Observable, of } from 'rxjs';
import { Product } from './models/product';

// const apiUrl = `http://jsonplaceholder.typicode.com/posts`
const apiUrl = `https://arthausvalerian.de/api/products`;
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private apiUrl = `https://arthausvalerian.de/products`
  // private apiUrl = `http://jsonplaceholder.typicode.com/posts`
  // products:any = []
  products: Product[] = [
    {
      category: 'unikat',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'unikat',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 2,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'unikat',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 3,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'unikat',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 4,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 5,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 6,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 7,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 8,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 9,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 10,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'webStorm'
    },
    {
      category: 'poster',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 11,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'webStorm'
    },
    {
      category: 'last-chance',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 12,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'last-chance',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 13,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'last-chance',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 14,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'last-chance',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 15,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
    {
      category: 'last-chance',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 16,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro',
      author: 'vsCode'
    },
  ];
  constructor(private http: HttpClient) {}
  async getProds() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });

  }
  async getProducts() {
    // return this.http.get<any>(apiUrl);
    console.log(this.products)
    return await this.products;
  }
  async getProdOne(id: any){
    // return this.getProducts().then(
      // this.products.map((id) => {
      //   const donut = donuts.find((donut: Donut) => donut.id === id);

      //   if (donut) {
      //     return donut;
      //   }

      //   return { name: '', icon: '', price: 0, description: '' };
      // })
      //  let product = await this.products.find((prod) => {
      //   console.log(prod)
      //   prod.id == id})
       let product = await this.products.find((prod) => prod.id == id)
       return product
    // );
  }
}
