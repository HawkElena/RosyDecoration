import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  searchTerm = '';
  selectedSize = '';
  bouquets = [
    {
      name: 'Romantic Red',
      size: 'S',
      price: '$15',
      image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
      quantity: 1,
    },
    {
      name: 'Elegant Pink',
      size: 'M',
      price: '$25',
      image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
      quantity: 1,
    },
    {
      name: 'Luxury White',
      size: 'L',
      price: '$35',
      image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
      quantity: 1,
    },
    {
      name: 'Romantic Red',
      size: 'S',
      price: '$15',
      image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
      quantity: 1,
    },
    {
      name: 'Elegant Pink',
      size: 'M',
      price: '$25',
      image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
      quantity: 1,
    },
    {
      name: 'Luxury White',
      size: 'L',
      price: '$35',
      image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
      quantity: 1,
    },
    {
      name: 'Romantic Red',
      size: 'S',
      price: '$15',
      image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
      quantity: 1,
    },
    {
      name: 'Elegant Pink',
      size: 'M',
      price: '$25',
      image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
      quantity: 1,
    },
    {
      name: 'Luxury White',
      size: 'L',
      price: '$35',
      image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
      quantity: 1,
    },
    {
      name: 'Romantic Red',
      size: 'S',
      price: '$15',
      image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
      quantity: 1,
    },
    {
      name: 'Elegant Pink',
      size: 'M',
      price: '$25',
      image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
      quantity: 1,
    },
    {
      name: 'Luxury White',
      size: 'L',
      price: '$35',
      image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
      quantity: 1,
    },
    {
      name: 'Romantic Red',
      size: 'S',
      price: '$15',
      image: 'http://192.168.1.157:8081/IMG_20260125_204930216_HDR2.jpg',
      quantity: 1,
    },
    {
      name: 'Elegant Pink',
      size: 'M',
      price: '$25',
      image: 'http://192.168.1.157:8081/IMG_20260125_205034949_HDR3.jpg',
      quantity: 1,
    },
    {
      name: 'Luxury White',
      size: 'L',
      price: '$35',
      image: 'http://192.168.1.157:8081/IMG_20260125_205250345_HDR.jpg',
      quantity: 1,
    },
  ];

  selectedProduct: any = null;
  zoomed = false;
  quantity: number = 1;
  isPanning = false;
  startX = 0;
  startY = 0;
  currentX = 0;
  currentY = 0;
  transform = "scale(1)";

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
  }

  closeModal() {
    
    this.zoomed = false;
    this.selectedProduct = null;
  }

  addToCart(product: any) {
    console.log('Producto agregado:', product);
    // Aquí puedes conectar tu servicio de carrito
  }

  //   title = 'hawkMarket';
  get filteredBouquets() {
    return this.bouquets.filter(
      (b) =>
        b.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedSize ? b.size === this.selectedSize : true),
    );
  }
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
