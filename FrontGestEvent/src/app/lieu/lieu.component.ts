import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {LieuService} from "../Service/Lieu.service";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-lieu',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
  ],
  templateUrl: './lieu.component.html',
  styleUrl: './lieu.component.css'
})
export class LieuComponent implements OnInit{
  visible = false;
  public lieus : any;
  public apis : any;

  constructor(public http : HttpClient, private lieuService : LieuService) {}

  ngOnInit() {
    this.lieuService.getAllLieu().subscribe(data => {
    //this.lieuService.get("http://localhost:8080/gestEvent/lieu").subscribe((data: any) => {
      this.lieus = data;
      console.log(data);
    });



   /*this.lieus = [
      {id : 1, nom: "Stade du 26 Mars", adresse: "Yirimadio", salle: "La Salle de conférence", capacite: 35},
      {id : 1, nom: "Stade du 26 Mars", adresse: "Yirimadio", salle: "La Salle de conférence", capacite: 35},
      {id : 1, nom: "Stade du 26 Mars", adresse: "Yirimadio", salle: "La Salle de conférence", capacite: 35},
      {id : 1, nom: "Stade du 26 Mars", adresse: "Yirimadio", salle: "La Salle de conférence", capacite: 35},
    ];*/


  }
  public creer = {
    "id" : 0,
    "nom" : "",
    "adresse": "",
    "salle": "",
    "capacite": 0
  }

  creerLieu() {
    this.lieuService.createLieu(this.creer).subscribe();
  }


  afficher(){
    this.visible=true;
  }
  cacher() {
    this.visible=false;
  }


}

