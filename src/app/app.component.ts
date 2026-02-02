import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./Components/sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: SidebarComponent;
  isSidebarOpen  = true;
  title = 'hawkMarket';
  
  ngAfterViewInit() { // Leer el estado inicial del sidebar 
    // this.isSidebarOpen = this.sidebar.isSidebarOpen; 
  }

  toggleSidebar() {
    this.sidebar.toggleSidebar();
    // this.isSidebarOpen = this.sidebar.isSidebarOpen;
    
  }

}



