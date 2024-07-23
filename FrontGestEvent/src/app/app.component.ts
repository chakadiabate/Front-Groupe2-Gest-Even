import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CorpsComponent } from "./corps/corps.component";
import {NgFor, NgIf} from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    CorpsComponent,
    RouterModule,
    NgFor,
    NgIf,
    // RouterLink,
    // RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projet';
}
