import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  items: number;
  nav = document.getElementById('navigation');
  constructor(public cartService: CartService){}
  ngOnInit(){
    this.cartService.itemsInCart();
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }
}
