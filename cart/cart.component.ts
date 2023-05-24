import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  prods: any = [];
  totalPrice: number;
  constructor(public cartService: CartService) {}

  async ngOnInit() {
    await this.updatePage();
  }
  async removeItem(prod: any) {
    await this.cartService.removeItem(prod);
    await this.updatePage();
  }
  async updatePage() {
    this.prods = await this.cartService.getItems();
    this.totalPrice = await this.cartService.totalPrice();
  }
  async incQuantity(id: number) {
    console.log("id");
    this.cartService.incQuantity(id);
    await this.updatePage();
  }
  async decQuantity(id: number) {
    console.log("id");
    this.cartService.decQuantity(id);
    await this.updatePage();
  }
}
