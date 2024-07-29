import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role, Utilisateur } from '../models/utilisateur.model';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
<<<<<<< Updated upstream:FrontGestEvent/src/app/Service/utilisateur-service.service.ts
  private baseUrl = 'http://localhost:8080/gestEvent/user';
  
=======
  private baseUrl = 'http://localhost:8081/gestEvent/user';

>>>>>>> Stashed changes:FrontGestEvent/src/app/Service/utilisateur.service.ts
  constructor(private http: HttpClient) {}

  createUser(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.baseUrl}/CreerClient`, utilisateur);
  }

  updateUser(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.baseUrl}/UpdateUser/${id}`, utilisateur);
  }

  getAllUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.baseUrl}/Users`);
  }

  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.baseUrl}/User?id=${id}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteUser/${id}`);
  }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}/listeRole`);
  }

  getRoles(){
    return this.http.get('http://localhost:8080/gestEvent/role/listeRole');
  }
}
