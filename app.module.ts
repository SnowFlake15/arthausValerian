import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SharedComponent } from './shared/shared.component';
import { ShopComponent } from './shop/shop.component';
import { ProductComponent } from './shop/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './shop/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    SharedComponent,
    ShopComponent,
    ProductComponent,
    ProductListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
