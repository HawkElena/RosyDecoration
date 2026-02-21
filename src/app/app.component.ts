import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarStateService } from './Services/siderstate.service';
import { CartService } from './Services/cart.service';
// import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FormsModule, CommonModule, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

// export class AppComponent implements AfterViewInit {
//   @ViewChild('sidebar') sidebar!: SidebarComponent;
//   // isSidebarOpen  = true;
//   title = 'hawkMarket';
  
//   ngAfterViewInit() { // Leer el estado inicial del sidebar 
//     // this.isSidebarOpen = this.sidebar.isSidebarOpen; 
//   }

//   constructor(private sidebarState: SidebarStateService) {}



//   toggleSidebar() {
//     // this.sidebar.toggleSidebar();
//     // // ← activa el estado global
//     // this.sidebarState.setOpen(true); 
//     // // this.sidebarState.setOpen(this.sidebar.isSidebarOpen);
//     // // this.isSidebarOpen = this.sidebar.isSidebarOpen;
//     const current = this.sidebarState.getOpen();
//     this.sidebarState.setOpen(!current);
//   }
// closeSidebar() { this.sidebarState.setOpen(false); }
// }

export class AppComponent {
 cartCount = 0;
 isModalOpen = false;
  constructor(private sidebarState: SidebarStateService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => { this.cartCount = count; });
    console.log("el valor del carrito es:", this.cartCount);
    console.log("Modal state :", this.isModalOpen);  
    
}
  get isSidebarOpen() {
    return this.sidebarState.getOpen();
  }

  toggleSidebar() {
    const current = this.sidebarState.getOpen();
    this.sidebarState.setOpen(!current);
  }
  setModalState(isOpen: boolean) {
  this.isModalOpen = isOpen;
  console.log("Modal state changed:", this.isModalOpen);  
}

goToCart() {
  // Aquí puedes agregar la lógica para navegar a la página del carrito
  // Por ejemplo, si estás usando Angular Router:
  // this.router.navigate(['/cart']);
  console.log('Cart clicked');
  this.router.navigate(['/cart']);    
}

}

