import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  items: number;
  constructor(public cartService: CartService){}
  ngOnInit(){
    this.cartService.itemsInCart();
  }
}
