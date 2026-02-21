import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import { MothersdayComponent } from './Components/mothersday/mothersday.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  {path: 'mothersday', component: MothersdayComponent },
  { path: 'cart', component: CartComponent },
  {path: 'checkout', component: CheckoutComponent },
//   { path: 'product/:id', component: ProductDetailsComponent },
  // {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
];
