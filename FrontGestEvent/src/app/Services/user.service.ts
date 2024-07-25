import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private HttpClient: HttpClient) {}

  private url = 'http://localhost:8080/gestEvent/EventCat/listeEventCat';

  getCathegorie(): Observable<any> {
    return this.HttpClient.get<any>(this.url);
  }
}
