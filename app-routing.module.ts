import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShopComponent } from './shop/shop.component';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { CategoriesComponent } from './shop/categories/categories.component';

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
    path: 'shop/category/:id',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
