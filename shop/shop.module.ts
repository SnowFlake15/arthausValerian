import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoriesComponent } from "./categories/categories.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { ShopComponent } from "./shop.component";

export const routes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
    // children: [
    //   { path: '',
    //     component: CategoriesComponent,
    //   }
    // ]
  },
  {
    path: 'shop/category/:id',
    component: ProductListComponent
  }
]
@NgModule({
  declarations: [
    // ProductComponent,
    // ProductListComponent,
    // CategoriesComponent
  ],
  imports: [RouterModule.forChild(routes)],
})
export class ShopModule {}