import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { };

  getCardNews(queryName: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://www.publico.pt/api/list/${queryName}`)
  }
}
