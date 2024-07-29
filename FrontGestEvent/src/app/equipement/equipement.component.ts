import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {CorpsComponent} from "../corps/corps.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {NgForOf, NgIf} from "@angular/common";

import {FormsModule} from "@angular/forms";
import {EquipementService} from "../Service/equipementService";

@Component({
  selector: 'app-equipement',
  standalone: true,
  imports: [SidebarComponent, CorpsComponent, NavbarComponent, NgIf, FormsModule, NgForOf],
  templateUrl: './equipement.component.html',
  styleUrl: './equipement.component.css'
})
export class EquipementComponent {
  visible = false;
  isVisibleSecondPopup = false; // Property for second popup visibility
  equipements: any[] = [];
  newEquipement: any = { id: 0, name: '', prestateur: '', description: ''}; // Pour le formulaire d'ajout
  selectedEquipement: any = { id: 0, name: '', prestateur: '', description: ''}; // Pour le formulaire de mise à jour


  constructor(private equipementService: EquipementService) {}

  ngOnInit(): void {
    this.getEquipements();
  }

  afficher(): void {
    this.visible = true;
  }

  cacher(): void {
    this.visible = false;
  }

  showSecondPopup(equipement: any): void {
    this.selectedEquipement = equipement;
    this.isVisibleSecondPopup = true;
  }

  hideSecondPopup(): void {
    this.selectedEquipement = null;
    this.isVisibleSecondPopup = false;
  }

  getEquipements(): void {
    this.equipementService.afficherEqui().subscribe(data => {
      this.equipements = data;
    });
  }

  addEquipement(): void {
    this.equipementService.ajouterEqui(this.newEquipement).subscribe(data => {
      this.equipements.push(data);
      this.newEquipement = { id: 0, name: '', prestateur: '',description:'' }; // Réinitialiser le formulaire
      this.cacher();
    });
  }

  updateEquipement(): void {
    if (this.selectedEquipement) {
      this.equipementService.modifierEqui(this.selectedEquipement.id, this.selectedEquipement).subscribe(data => {
        const index = this.equipements.findIndex(e => e.id === data.id);
        if (index !== -1) {
          this.equipements[index] = data;
        }
        this.hideSecondPopup();
      });
    }
  }

  deleteEquipement(id: number): void {
    this.equipementService.supEqui(id).subscribe(() => {
      this.equipements = this.equipements.filter(e => e.id !== id);
    });
  }
}
