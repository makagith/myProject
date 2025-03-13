
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PirceServiseService {
  private apiUrl = 'https://your-api-url.com/calculate'; // თქვენი სერვერის URL

  constructor(private http: HttpClient) {}

  calculate(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
