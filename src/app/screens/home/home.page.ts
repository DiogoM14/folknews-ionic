import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  news: any = []
  search = this.router.url

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.search)
    this.getNews(this.search);
  }

  getNews(search: string) {
    this.searchService.getNews(search)
    .subscribe(response => this.news = response
      )
    }
}
