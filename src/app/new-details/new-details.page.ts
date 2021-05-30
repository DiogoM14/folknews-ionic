import { Component, OnInit } from '@angular/core';
import { CardService } from '../card/card.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.page.html',
  styleUrls: ['./new-details.page.scss'],
})
export class NewDetailsPage implements OnInit {
  news: any
  id: string = ''

  constructor(private service: CardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initCurrentNew()
  }

  getNews(id: string) {
    this.service.getNews(id)
    .subscribe(response => this.news = response
      )
    }

  initCurrentNew() {
    const newsId = this.route.snapshot.paramMap.get('id')
    if (newsId != null) {
      this.id = newsId;
    }
    this.service.getNews(this.id).subscribe(response => {
      this.news = response
      this.news = [this.news]
    });
  }
}
