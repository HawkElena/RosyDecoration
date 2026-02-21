import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { SidebarStateService } from '../../Services/siderstate.service';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf,RouterLink,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})

// export class SidebarComponent {

//   constructor(private sidebarState: SidebarStateService) {}
//   // @ViewChild('sidebar') sidebar!: SidebarComponent;
//   isSidebarOpen = false;
//   catalogOpen = true;
//   ngOnInit() {
//     // Asegúrate de que el menú esté oculto al cargar la página
//     this.isSidebarOpen = this.sidebarState.getOpen();
//     // this.isSidebarOpen = true;
//     this.catalogOpen = true;
//   }

//   toggleSidebar() {
//     console.log('Toggle Sidebar');
//     // this.isSidebarOpen = !this.isSidebarOpen;
//     // this.sidebarState.setOpen(this.isSidebarOpen);
//     // // this.sidebar!.isSidebarOpen = this.isSidebarOpen;
//     const newState = !this.isSidebarOpen;
//     this.sidebarState.setOpen(newState);
//     this.isSidebarOpen = newState;
//   }

//   toggleCatalog() {
//     this.catalogOpen = !this.catalogOpen;
//   }
// }
export class SidebarComponent {
  isSidebarOpen = false;
 catalogOpen = true;
  constructor(private sidebarState: SidebarStateService) {}

  ngOnInit() {
    this.isSidebarOpen = this.sidebarState.getOpen();
    this.sidebarState.isOpen$.subscribe(state => { this.isSidebarOpen = state; console.log("Sidebar recibe:", state); });
    console.log("SidebarComponent INIT");
    // const current = this.sidebarState.getOpen();
    // this.sidebarState.setOpen(!current);
  }

  toggleSidebar() {
    const newState = !this.isSidebarOpen;
    this.sidebarState.setOpen(newState);
    this.isSidebarOpen = newState;
  }
    toggleCatalog() {
    this.catalogOpen = !this.catalogOpen;
  }
}
