import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  // @ViewChild('sidebar') sidebar!: SidebarComponent;
  isSidebarOpen = false;
  catalogOpen = false;
  ngOnInit() {
    // Asegúrate de que el menú esté oculto al cargar la página
    this.isSidebarOpen = false;
    this.catalogOpen = false;
  }

  toggleSidebar() {
    console.log('Toggle Sidebar');
    this.isSidebarOpen = !this.isSidebarOpen;
    // this.sidebar!.isSidebarOpen = this.isSidebarOpen;
  }

  toggleCatalog() {
    this.catalogOpen = !this.catalogOpen;
  }
}

