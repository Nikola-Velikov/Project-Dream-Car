import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { offer } from './shared/interfaces';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadPosts() {
    return this.httpClient.get<any[]>('http://localhost:3000/home', {});
  }
  register(email: string, password: string) {
    return this.httpClient.post('http://localhost:3000/auth/register', {
      email,
      password,
    });
  }
  login(email: string, password: string) {
    return this.httpClient.post('http://localhost:3000/auth/login', {
      email,
      password,
    });
  }
  create(
    color: string,
    description: string,
    imageUrl: string,
    madeIn: string,
    model: string,
    price: number,
    seats: number,
    town: string,
    year: number,
    owner: string
  ) {
    return this.httpClient.post('http://localhost:3000/create', {
      color,
      description,
      imageUrl,
      madeIn,
      model,
      price,
      seats,
      town,
      year,
      owner,
    });
  }

  getOffers() {
    return this.httpClient.get<offer[]>('http://localhost:3000/catalog');
  }
  getDetails(id: string) {
    return this.httpClient.get<offer>(
      'http://localhost:3000/car/details/' + id
    );
  }
  edit(
    id: string,
    color: string,
    description: string,
    imageUrl: string,
    madeIn: string,
    model: string,
    price: number,
    seats: number,
    town: string,
    year: number
  ) {
    return this.httpClient.post('http://localhost:3000/car/edit/' + id, {
      color,
      description,
      imageUrl,
      madeIn,
      model,
      price,
      seats,
      town,
      year,
    });
  }
  del(id: string) {
    return this.httpClient.get('http://localhost:3000/car/delete/' + id);
  }
  isLogged(id: any) {
    let token!: any;
    this.httpClient.get('http://localhost:3000/token/' + id).subscribe({
      error: (err) => {
        if (localStorage.length == 0) {
          sessionStorage.setItem('istrue', 'false');
        } else if (err.error.text == 'Valid') {
        
          sessionStorage.setItem('istrue', 'true');

      
        } else if (err.error.text == 'Invalid') {
          sessionStorage.setItem('istrue', 'false');
        }
      },
    });

    token = sessionStorage.getItem('istrue');


    return token;
  }
  favorite(id: any, user: any) {
    return this.httpClient.get(
      'http://localhost:3000/favorite/' + id + '/' + user
    );
  }
}
