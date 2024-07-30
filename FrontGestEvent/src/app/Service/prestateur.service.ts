import { Injectable } from '@angular/core';
import { Prestateur } from '../Models/utilisateurmodel.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestateurService {

  private baseUrl =  "http://localhost:8081/api/prestateurs";

  constructor(private http: HttpClient) { }

  getPrestateurById(id: number): Observable<Prestateur[]> {
    return this.http.get<any>(`${this.baseUrl}/Afficher/${id}`);
  }

  getAllPrestateur(): Observable<Prestateur[]> {
    return this.http.get<Prestateur[]>(`${this.baseUrl}/ListePresta`);
  }

  createPrestateur(Prestateur: Prestateur){
    return this.http.post<Prestateur[]>(`${this.baseUrl}/CreerPresta`, Prestateur);
  }

  updatePrestateur(id: number, Prestateur:Prestateur[]): Observable<Prestateur[]> {
    return this.http.put<Prestateur[]>(`${this.baseUrl}/ModifPresta/{id}`, Prestateur);
  }

  deletePrestateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/{id}`);
  }
}
