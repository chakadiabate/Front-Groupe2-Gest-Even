import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { category } from '../Modeles/Category';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,NgFor, RouterOutlet],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css',
})
export class NavbarComponent {
  // utilisateur: any[] = [];

  cat:category[] = [];

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    return this.userservice.getCathegorie().subscribe((data) => {
      this.cat = data;
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
