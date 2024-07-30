import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: 
  [
    NgIf,
    RouterOutlet,
    NgFor,
    SidebarComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css',
})
export class EvenementComponent {
  evenement: any[] = [];

  // constructor(private eventService: EventServiceService) {}

  // ngOnInit() {
  //   this.getEvent();
  // }

  // getEvent() {
  //   return this.eventService.getNames().subscribe((data) => {
  //     this.evenement = data;
  //   });
  // }

  visible = false;
  catpop = false;
  typepop = false;

  catpopup() {
    this.typepop = false;
    this.catpop = !this.catpop;
  }

  typepopup() {
    this.catpop = false;
    this.typepop = !this.typepop;
  }

  afficher() {
    this.visible = true;
  }
  cacher() {
    this.visible = false;
  }
}