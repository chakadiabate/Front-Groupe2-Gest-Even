import { NgForOf, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { EquipementService } from '../Service/equipement.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Equipement } from '../Models/utilisateurmodel.component';

@Component({
  selector: 'app-equipement',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    SidebarComponent,
    RouterOutlet,
    RouterLink,

],
  templateUrl: './equipement.component.html',
  styleUrl: './equipement.component.css'
})
export class EquipementComponent  {
  
  equipements: Equipement[] = [];
  constructor(
    private equipementservice: EquipementService,
    private fb: FormBuilder
  ) {
    // this.reservationForm = this.fb.group({
    //   date_res: ['2024-07-29 09:18:28.000000', Validators.required],
    //   categories: [1, Validators.required],
    //   evenement_id: [1, [Validators.required, Validators.email]],
    //   methode_paiement_id: [1, Validators.required],
    //   statut_id: [1, Validators.required],
    //   utilisateur_id: [1, Validators.required]
    // });
  }

  ngOnInit(): void {
    this.getAllEquipements();
  }


  getAllEquipements(): void {
    this.equipementservice.afficherEqui().subscribe(
      (data: Equipement[]) => {
        this.equipements = data;
    
      },
      error => console.error(error)
    );
  }

 

  visible = false;
   visibleSup = false;
   visibleEq = false;

  afficher(){
    this.visible=true;
  }
  cacher() {
    this.visible=false;
  }
  afficherSup(){
    this.visibleSup=true;
  }
  cacherSup() {
    this.visibleSup=false;
  }
  afficherEq(){
    this.visibleEq=true;
  }
  cacherEq() {
    this.visibleEq=false;
  }


}
