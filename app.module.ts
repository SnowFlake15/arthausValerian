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
import { CategoriesComponent } from './shop/categories/categories.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { EventPageComponent } from './events/event-page/event-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './shop/product-page/product-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    SharedComponent,
    ShopComponent,
    ProductComponent,
    ProductPageComponent,
    ProductListComponent,
    FooterComponent,
    CategoriesComponent,
    EventsComponent,
    EventComponent,
    EventPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FontAwesomeModule,
    // RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
