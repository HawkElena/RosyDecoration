import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCount.asObservable();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadCartFromLocalStorage();
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.saveCartToLocalStorage();
    this.cartCount.next(this.cartItems.length);
  }
  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter(item => item !== product);
    this.saveCartToLocalStorage();
    this.cartCount.next(this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }

  private saveCartToLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  private loadCartFromLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cartItems = JSON.parse(savedCart);
        this.cartCount.next(this.cartItems.length);
      }
    }
  }
}
