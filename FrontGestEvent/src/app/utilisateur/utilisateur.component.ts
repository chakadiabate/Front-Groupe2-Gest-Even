import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [NgIf],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {
  visible = false;

  Affiche() {
      this.visible = true;
  }

  cacher() {
      this.visible = false;
    }
deleteUser(_t56: any) {
throw new Error('Method not implemented.');
}
editUser(_t56: any) {
throw new Error('Method not implemented.');
}

}
