import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getNews(search: string){
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://www.publico.pt/api/list/${search}`)
  }
}
