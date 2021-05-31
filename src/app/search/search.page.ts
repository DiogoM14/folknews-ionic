import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  news: any = []
  search: any
  queryName = this.router.url

  constructor(private searchService: SearchService, private router: ActivatedRoute) { }

  ngOnInit() {
  }

  getNews(news: any) {
    this.searchService.getNews(news)
    .subscribe(response => this.news = response
      )
  }

  initCurrentNew() {
    const newsSearch = this.router.snapshot.paramMap.get('search')
    if (newsSearch != null) {
      this.news = newsSearch;
    }
    this.searchService.getNews(this.news).subscribe(response => {
      this.news = response
    })
  }
}