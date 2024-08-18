import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users`)
  }

  getUsersById(id: number) {
    return this.http.get(`${this.url}/users/${id}`)
  }

  postUser(user: any) {
    return this.http.post(`${this.url}/users`, user);
  }

  getUserWithHeaders() {
    const token = "123456";
    const headers = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.get(`${this.url}/users`, { headers })
  }
}
