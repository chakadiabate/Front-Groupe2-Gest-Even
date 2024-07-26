import { NgIf, NgForOf } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy, model } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "../sidebar/sidebar.component";

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

  

 Presta:any = {

  "id": 0,
  "nom": "",
  "mail":"",
  "tel": "",
  "profile":"",
  "description":""
 }
  http = inject(HttpClient);

 CreerPresta(){
  debugger;
  this.http.post("http://localhost:8080/api/prestateurs", this.Presta).subscribe((res:any)=>{
    debugger;
    if(res.result){
      alert("Prestateur ajouter avec succès");
    }else{
      alert(res.message)
    }
  })
 }




  
  selected = model<Date | null>(null);
  visible = false;
  visibleAgenda = false;
  modifier = false;
  profile = false;

  afficher(){
    this.visible = true;
  }
  cacher() {
    this.visible = false;
  }

  afficherAgenda(){
    this.visibleAgenda = true;
  }
  cacherAgenda() {
    this.visibleAgenda = false;
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
}
