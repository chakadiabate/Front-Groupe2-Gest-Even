import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  constructor(private HttpClient:HttpClient) {}

  private url = 'http://localhost:8080/gestEvent/event/afficher';

  getNames():Observable<any>{
    return this.HttpClient.get<any>(this.url);
  }
}
