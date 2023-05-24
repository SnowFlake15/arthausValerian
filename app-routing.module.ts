import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShopComponent } from './shop/shop.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { CategoriesComponent } from './shop/categories/categories.component';
import { ProductComponent } from './shop/product/product.component';
import { ProductPageComponent } from './shop/product-page/product-page.component';
import { EventsComponent } from './events/events.component';
import { EventPageComponent } from './events/event-page/event-page.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    // {
  //   path: 'shop',
  //   loadChildren: () =>
  //   import('./shop/shop.module').then((x) => x.ShopModule),
  // },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
    children: [
      { path: '',
        component: CategoriesComponent,
      }
    ]
  },
  {
    path: 'shop/category/:category',
    component: ProductListComponent
  },
  {
    path: 'shop/category/:category/:id/:name',
    component: ProductPageComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/:id/:event',
    component: EventPageComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
