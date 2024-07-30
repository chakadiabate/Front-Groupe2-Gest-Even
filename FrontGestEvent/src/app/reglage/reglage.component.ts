import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-reglage',
  standalone: true,
  imports: 
  [
    RouterOutlet,
    RouterLink,
    NgIf,
    SidebarComponent
  ],
  templateUrl: './reglage.component.html',
  styleUrl: './reglage.component.css'
})
export class ReglageComponent {

}
