import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipement } from '../Models/utilisateurmodel.component';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  private baseUrl = 'http://localhost:8081/api/equipements';

  constructor(private http: HttpClient) {}

  ajouterEqui(equipement:Equipement): Observable<Equipement[]> {
    return this.http.post<Equipement[]>(`${this.baseUrl}`, equipement);
  }

  afficherEqui(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.baseUrl}/ListEquipements`);
  }

  modifierEqui(id: number, equipement: Equipement): Observable<Equipement[]> {
    return this.http.put<Equipement[]>(`${this.baseUrl}/${id}`, equipement);
  }

  supEqui(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
