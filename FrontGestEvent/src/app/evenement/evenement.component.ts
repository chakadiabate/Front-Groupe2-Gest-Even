import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [NgIf, RouterOutlet],
  templateUrl: './evenement.component.html',
  styleUrl: './evenement.component.css',
})
export class EvenementComponent {
  visible = false;

  afficher() {
    this.visible = true;
  }
  cacher() {
    this.visible = false;
  }
}
