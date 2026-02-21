import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../../Services/cart.service';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cart',
  imports: [ReactiveFormsModule], // Asegúrate de importar ReactiveFormsModule y NgFor en tu módulo principal o en el módulo donde declares este componente],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  checkoutForm!: FormGroup;
  cartItems: any[] = [];
  total: number = 0;
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
  ) {}
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      paymentMethod: ['', Validators.required],      
    });
    console.log("entro al carrito");
  }
  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  submitOrder() {
    if (this.checkoutForm.invalid) return;
    const orderData = {
      customer: this.checkoutForm.value,
      items: this.cartItems,
      total: this.total,
    };
    console.log('Orden lista para enviar a Stripe/PayPal:', orderData); // Aquí conectaremos Stripe o PayPal }
  }
removeUnselected() {
  this.cartItems = this.cartItems.filter(item => item.selected);
  this.calculateTotal();
}

removeItem(item: any) {
  item.removing = true;
  setTimeout(() => {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartItems.filter(i => i !== item);
    this.calculateTotal();
  }, 250);
}



toggleItemSelection(item: any) {
  item.selected = !item.selected;
  this.calculateTotal();
}

increaseQty(item: any) {
  item.qty++;
  this.calculateTotal();
}

decreaseQty(item: any) {
  if (item.qty > 1) {
    item.qty--;
  } else {
    this.removeItem(item);
  }
  this.calculateTotal();
}


}