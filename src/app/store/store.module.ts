import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreRoutingModule } from './store-routing.module';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from '../store/components/orders/orders.component';
import { ProductsComponent } from '../store/components/products/products.component';
import { ShoppingCartComponent } from '../store/components/shopping-cart/shopping-cart.component';
import { StoreComponent } from '../store/components/store.component';

@NgModule({
  declarations: [
    StoreComponent,
    OrdersComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    StoreRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StoreModule { }
