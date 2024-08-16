import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000';
  
  constructor(
    private http: HttpClient
  ) { }

  getUsersById(id: number) {
    return this.http.get(`${this.url}/users/${id}`)
  }
}
