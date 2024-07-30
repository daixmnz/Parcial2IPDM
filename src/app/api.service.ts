import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://www.hostcatedral.com/api/appNoti/public/buscar';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${query}`);
  }
}