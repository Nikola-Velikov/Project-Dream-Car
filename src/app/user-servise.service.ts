import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiseService {
  constructor(private httpClient: HttpClient) {}
  getUser(id: any) {
    this.httpClient.get('http://localhost:3000/user/' + id);
  }
}
