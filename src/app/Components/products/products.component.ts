import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../Services/productsv.service';
import { SidebarStateService } from '../../Services/siderstate.service';
import { Product } from '../../Models/product.model';
import { CartService } from '../../Services/cart.service';
import { AppComponent } from '../../app.component';
// import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule], // Asegúrate de importar FormsModule y CommonModule en tu módulo principal o en el módulo donde declares este componente],  
  // providers: [PhotosvdService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent  implements OnInit {
  searchTerm = '';
  selectedSize = '';
  products: Product[] = [];
  
  isSidebarOpen = false;
  cartCount = 0;
  // bouquets = [
  //   {
  //     id: 1,
  //     name: 'Romantic Red',
  //     size: 'S',
  //     price: '$15',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: 'Elegant Pink',
  //     size: 'M',
  //     price: '$25',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: 'Luxury White',
  //     size: 'L',
  //     price: '$35',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     name: 'Romantic Red',
  //     size: 'S',
  //     price: '$15',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 5,
  //     name: 'Elegant Pink',
  //     size: 'M',
  //     price: '$25',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 6,
  //     name: 'Luxury White',
  //     size: 'L',
  //     price: '$35',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 7,
  //     name: 'Romantic Red',
  //     size: 'S',
  //     price: '$15',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 8,
  //     name: 'Elegant Pink',
  //     size: 'M',
  //     price: '$25',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 9,  
  //     name: 'Luxury White',
  //     size: 'L',
  //     price: '$35',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 10,
  //     name: 'Romantic Red',
  //     size: 'S',
  //     price: '$15',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
  //     quantity: 1,
  //   },
  //   { 
  //     id: 11,
  //     size: 'M',
  //     price: '$25',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 12,
  //     name: 'Luxury White',
  //     size: 'L',
  //     price: '$35',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 13,
  //     name: 'Romantic Red',
  //     size: 'S',
  //     price: '$15',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
  //     quantity: 1,
  //   },
  //   { 
  //     id: 14,
  //     name: 'Elegant Pink',
  //     size: 'M',
  //     price: '$25',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
  //     quantity: 1,
  //   },
  //   {
  //     id: 15,
  //     name: 'Luxury White',
  //     size: 'L',
  //     price: '$35',
  //     image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
  //     quantity: 1,
  //   },
  // ];

  selectedProduct: any = null;
  zoomed = false;
  quantity: number = 1;
  isPanning = false;
  startX = 0;
  startY = 0;
  currentX = 0;
  currentY = 0;
  transform = "scale(1)";

constructor(private productService: ProductService, private sidebarState: SidebarStateService, private cartService: CartService,private app: AppComponent) {  }

ngOnInit() {
    this.products = this.productService.getProducts().sort((a, b) => (a.name ?? '').localeCompare(b.name ?? '')); // Ordenar por nombre ascendente 
    this.sidebarState.isOpen$.subscribe(state => { this.isSidebarOpen = state; console.log("PRODUCT recibe:", state); });
    console.log("ProductComponent INIT");
    this.cartService.cartCount$.subscribe(count => { this.cartCount = count; });
    console.log("el valor del carrito es:", this.cartCount);
    
}


ngOnDestroy() {
  console.log("ProductComponent DESTROYED");
}

toggleZoom() {
  this.zoomed = !this.zoomed;

  if (!this.zoomed) {
    this.transform = "scale(1)";
    this.currentX = 0;
    this.currentY = 0;
  } else {
    this.transform = "scale(2.2)";
  }
}

startPan(event: MouseEvent) {
  if (!this.zoomed) return;
  this.isPanning = true;
  this.startX = event.clientX - this.currentX;
  this.startY = event.clientY - this.currentY;
}

panImage(event: MouseEvent) {
  if (!this.isPanning) return;

  this.currentX = event.clientX - this.startX;
  this.currentY = event.clientY - this.startY;

  this.transform = `scale(2.2) translate(${this.currentX}px, ${this.currentY}px)`;
}

endPan() {
  this.isPanning = false;
}

  openModal(product: any) {
    this.selectedProduct = product; 
    this.app.setModalState(true);
    document.body.classList.add('modal-open');
  }

  closeModal() {
    
    this.zoomed = false;
    this.selectedProduct = null;
    this.app.setModalState(false);
    document.body.classList.remove('modal-open');
  }

  addToCart(product: any) {
    console.log('Producto agregado:', product);
    // this.cartCount += product.quantity || 1; // Incrementa el contador del carrito
    this.cartService.addToCart(product);  
    // Aquí puedes conectar tu servicio de carrito
  }

  //   title = 'hawkMarket';
  // get filteredBouquets() {
  //   return this.bouquets.filter(
  //     (b) =>
  //       b.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
  //       (this.selectedSize ? b.size === this.selectedSize : true),
  //   );
  // }

  filterBySize(size: string) {
    this.selectedSize = size;
  }

  qty(product: any, varQt: string) {
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      if (varQt === "plus") {
        product.quantity += 1;
      } else if (varQt === "less") {
        product.quantity -= 1;
        if (product.quantity < 1) {
          product.quantity = 1;
        }
      }
    }
    console.log('Cantidad seleccionada para', product.name, product.quantity);
  }

}
