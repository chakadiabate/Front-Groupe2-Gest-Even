import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CorpsComponent } from "./corps/corps.component";
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilisateurComponent } from "./utilisateur/utilisateur.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    CorpsComponent,
    RouterModule,
    NavbarComponent
    // RouterLink,
    // RouterLinkActive,
    ,
    UtilisateurComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projet';
}
