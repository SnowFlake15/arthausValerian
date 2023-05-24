import { Injectable } from "@angular/core";
import { Product } from "./models/product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartKey = "cart";
  items: Product[] = [];
  itemsCount: number = 0;
  constructor() {}
  // getCart(): Product[] {
  //   const cartJson = localStorage.getItem(this.cartKey);
  //   console.log(cartJson)
  //   if (cartJson) {
  //     return JSON.parse(cartJson);
  //   }
  //   console.log(cartJson)
  //   return [];
  // }

  // addToCart(product: Product): void {
  //   const cart = this.getCart();

  //   const existingProduct = cart.find(p => p.id === product.id);
  //   if (existingProduct) {
  //     existingProduct.quantity += 1;
  //   } else {
  //     cart.push(product);
  //   }
  //   console.log(existingProduct?.quantity)

  //   localStorage.setItem(this.cartKey, JSON.stringify(cart));
  //   console.log(existingProduct?.quantity)

  // }

  // removeFromCart(productId: number): void {
  //   const cart = this.getCart();
  //   const index = cart.findIndex(p => p.id === productId);
  //   if (index >= 0) {
  //     cart.splice(index, 1);
  //     localStorage.setItem(this.cartKey, JSON.stringify(cart));
  //   }
  // }

  // clearCart(): void {
  //   localStorage.removeItem(this.cartKey);
  // }

  addToCart(addedItem: Product) {
    // this.items.push(addedItem);
    // console.log(addedItem);

    //-----check if there are items already added in cart
    let existingItems: any[] = [];
    if (localStorage.getItem("cart_items")) {
      //----- update by adding new items
      this.loadCart();
      if (this.itemInCart(addedItem)) {
        let ind = this.items.findIndex((o) => o.id === addedItem.id);
        this.items[ind].quantity += 1;
        console.log("a");
      } else {
        this.items.push(addedItem);
        let ind = this.items.findIndex((o) => o.id === addedItem.id);
        this.items[ind].quantity += 1;

        console.log("b");
      }
      // existingItems = items ? JSON.parse(items): null;
      // existingItems = [addedItem, ...existingItems];
      console.log("Items exists");
    }
    //-----if no items, add new items
    else {
      console.log("NO items exists");
      this.items = [];
      this.items.push(addedItem);
    }

    this.saveCart();
    this.itemsInCart();
  }

  getItems() {
    this.loadCart();
    console.log(this.items);
    return this.items;
  }

  loadCart(): void {
    let items = localStorage.getItem("cart_items");
    this.items = items ? JSON.parse(items) ?? [] : null;
    console.log(items);

    //   const cartJson = localStorage.getItem(this.cartKey);
  }
  itemsInCart(): number {
    this.loadCart();
    this.itemsCount = 0;
    this.items?.forEach((item) => (this.itemsCount += item.quantity));
    return this.itemsCount;
  }
  saveCart(): void {
    localStorage.setItem("cart_items", JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];

    localStorage.removeItem("cart_items");
    this.itemsInCart();
  }

  removeItem(item: Product) {
    const index = this.items.findIndex((o) => o.id === item.id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
    this.itemsInCart();
  }
  incQuantity(id: number) {
    const index = this.items.findIndex((o) => o.id === id);
    this.items[index].quantity += 1;
    this.saveCart();
    this.itemsInCart();
  }
  decQuantity(id: number) {
    const index = this.items.findIndex((o) => o.id === id);
    this.items[index].quantity > 0 ? (this.items[index].quantity -= 1) : null;
    this.saveCart();
    this.itemsInCart();
  }

  itemInCart(item: Product): boolean {
    return this.items.findIndex((o) => o.id === item.id) > -1;
  }
  totalPrice() {
    let price = 0;
    for (let item of this.items) {
      price += item.price * item.quantity;
    }
    return price;
  }
}
