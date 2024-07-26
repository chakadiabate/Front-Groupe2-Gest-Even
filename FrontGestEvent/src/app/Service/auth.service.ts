import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081';  // Change this to your backend URL
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  public userRole$ = this.userRoleSubject.asObservable();

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(email + ':' + password)
    });

    return this.http.get<any[]>(`${this.baseUrl}/gestEvent/user/Users`, { headers }).pipe(
      map(users => {
        // Trouvez l'utilisateur connecté et définissez son rôle
        const user = users.find(user => user.email === email);
        if (user) {
          
          this.userRoleSubject.next(user.role);

          
          this.storeUserRole(user.role.role);
          console.log('autentification', user.role.role);

         
        }
        return user;
      })
    );
  }


  private storeUserRole(role: string): void {
    localStorage.setItem('userRole', role);
  }

  public getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
}
