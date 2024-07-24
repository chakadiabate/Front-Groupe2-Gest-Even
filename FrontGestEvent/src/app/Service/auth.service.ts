import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080';  // Changez cela en fonction de l'URL de votre backend

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password)
    });

    return this.http.get(`${this.baseUrl}/gestEvent/user/Users`, { headers });
  }
}
