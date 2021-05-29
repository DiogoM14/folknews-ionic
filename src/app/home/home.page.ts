import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: any = []
  queryName = "popular"

  constructor(private cardService: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoryNews(this.queryName);
  }

  getCategoryNews(queryName: string) {
    this.cardService.getCardNews(queryName)
    .subscribe(response => this.news = response
      )
    }
}
