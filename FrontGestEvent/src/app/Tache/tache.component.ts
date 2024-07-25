import { Component } from '@angular/core';
import { NavbarComponent } from '../Utilisateur/utilisateur.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { EventServiceService } from '../Services/event-service.service';
@Component({
  selector: 'app-corps',
  standalone: true,
  imports: [NgIf, RouterOutlet, NgFor],
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css',
})
export class TacheComponent {
  evenement: any[] = [];

  constructor(private eventService: EventServiceService) {}

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    return this.eventService.getNames().subscribe((data) => {
      this.evenement = data;
    });
  }

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
