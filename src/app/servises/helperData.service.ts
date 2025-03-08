import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { comand } from '../components/interFace/my-inter-face.service';
@Injectable({
  providedIn: 'root',
})
export class HelperDataService {

    private nameLink = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }
  
    getList(): Observable<comand[]> {
      return this.http.get<comand[]>(this.nameLink);
    }
  
}