import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getNews(id: string) {
    return this.http.get(`https://www.publico.pt/api/content/news/${id}`)
  }
}
