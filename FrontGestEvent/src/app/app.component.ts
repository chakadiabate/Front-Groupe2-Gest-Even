import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TacheComponent } from './Tache/tache.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    TacheComponent,
    RouterModule
    // RouterLink,
    // RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projet';
}
