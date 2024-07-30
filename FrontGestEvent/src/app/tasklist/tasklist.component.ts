import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: 
  [
    NgIf,
    NgForOf,
    RouterOutlet,
    RouterLink,
    SidebarComponent
  ],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {

  reservations: any[] = [];
  selectedReservation: any = {};

  constructor(private http: HttpClient) {
    this.loadReservations();
  }

  

  loadReservations() {
    // // this.http.get('/api/reservations').subscribe((data: any[]) => {
    // //   this.reservations = data;
    // });
  }

  updateReservation(reservation: any) {
    this.http.put(`/api/reservations/${reservation.id}`, reservation).subscribe(() => {
      this.loadReservations();
    });
  }

  modifierReservation() {
    this.http.put(`/api/reservations/${this.selectedReservation.id}`, this.selectedReservation).subscribe(() => {
      this.cacher();
      this.loadReservations();
    });
  }

  annuler() {
    this.cacherSup();
  }

  confirmer() {
    this.http.delete(`/api/reservations/${this.selectedReservation.id}`).subscribe(() => {
      this.cacherSup();
      this.loadReservations();
    });
  }







  
  visible = false;
  visibleSup = false;

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

}
