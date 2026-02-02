import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
//   { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },

  // {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];
