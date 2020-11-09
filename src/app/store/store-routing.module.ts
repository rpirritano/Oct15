import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './components/store.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [

  { path: 'store', component: StoreComponent,
    children: [
      {path: 'products', component: ProductsComponent},
      {path: 'cart', component: ShoppingCartComponent},
      {path: 'orders', component: OrdersComponent},
      //{path: '', redirectTo: 'products', pathMatch: 'full'}, //not working?
      //{path: '**', redirectTo: '/products', pathMatch: 'full'}, //not working?
    ],
    
  },
 
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
 