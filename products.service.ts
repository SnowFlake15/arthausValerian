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
const apiUrl = `http://localhost:8080/api/products`;
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // private apiUrl = `https://arthausvalerian.de/products`
  // private apiUrl = `http://jsonplaceholder.typicode.com/posts`
  // products:any = []
  products: Product[] = [
    {
      category: 'classical',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro'
    },
    {
      category: 'classical',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro'
    },
    {
      category: 'classical',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro'
    },
    {
      category: 'classical',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro'
    },
    {
      category: 'classical',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro'
    },
    {
      category: 'classical',
      description:
        'Nicolas Francois Octave Tassaert was a French painter of portraits and genre, religious, historical and allegorical paintings, as well as a lithographer and engraver. He was the grandson of the sculptor Jean-Pierre-Antoine Tassaert.',
      discounted_price: null,
      price: 200.000,
      id: 1,
      img_url: 'https://mdl.artvee.com/ft/300807rg.jpg',
      is_available: false,
      name: 'Heaven and Hell',
      year: 1850,
      ccy: 'euro'
    },
  ];
  constructor(private http: HttpClient) {}
  async getJSON() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });
  }
  async getProducts() {
    // return this.http.get<any>(apiUrl);
    return this.products;
  }
}
