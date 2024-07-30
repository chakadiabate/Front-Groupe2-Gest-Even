import { NgIf, NgForOf } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { FormsModule,FormBuilder } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Prestateur } from '../Models/utilisateurmodel.component';
import { PrestateurService } from '../Service/prestateur.service';

@Component({
  selector: 'app-prestateur',
  standalone: true,
  imports: [NgIf, RouterOutlet, MatCardModule, MatDatepickerModule, RouterLink, RouterLinkActive, NgForOf, FormsModule, SidebarComponent],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './prestateur.component.html',
  styleUrls: ['./prestateur.component.css']  // Corrected
})
export class PrestateurComponent  {
  catpop = false;
  typepop = false;
  visible = false;
  modifier = false;
  profile = false;

  catpopup() {
    this.typepop = false;
    this.catpop = !this.catpop;
  }

  typepopup() {
    this.catpop = false;
    this.typepop = !this.typepop;
  }

  afficher(){
    this.visible = true;
  }
  cacher() {
    this.visible = false;
  }

  afficherModifier(){
    this.modifier = true;
  }
  cacherModifier() {
    this.modifier = false;
  }
  afficherprofile(){
    this.profile = true;
  }
  cacherprofile() {
    this.profile = false;
  }
//Logique d affichage des donnees 

Prestateurs: Prestateur[] = [];
  constructor(
    private prestateurservice: PrestateurService,
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
    this.getAllPrestateurs();
  }


  getAllPrestateurs(): void {
    this.prestateurservice.getAllPrestateur().subscribe(
      (data: Prestateur[]) => {
        this.Prestateurs = data;
    
      },
      error => console.error(error)
    );
  }

//Fin logique d affichage des donnees
  

}
