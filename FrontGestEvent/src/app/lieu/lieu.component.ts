import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {LieuService} from "../Service/Lieu.service";
import {HttpClient} from "@angular/common/http";
import {FormsModule,FormBuilder} from "@angular/forms";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { Lieu } from '../Models/utilisateurmodel.component';

@Component({
  selector: 'app-lieu',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    SidebarComponent,
    RouterOutlet,
    RouterLink
],
  templateUrl: './lieu.component.html',
  styleUrl: './lieu.component.css'
})
export class LieuComponent implements OnInit{
  Lieux: Lieu[] = [];
  constructor(
    private lieuservice: LieuService,
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
    this.getAllLieu();
  }


  getAllLieu(): void {
    this.lieuservice.getAllLieu().subscribe(
      (data: Lieu[]) => {
        this.Lieux = data;
    
      },
      error => console.error(error)
    );
  }


  
visible=false;


  afficher(){
    this.visible=true;
  }
  cacher() {
    this.visible=false;
  }



  }
  

  





