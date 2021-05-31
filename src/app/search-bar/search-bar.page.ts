import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
  @Input() getCategoryNews: any;

  constructor() { }

  ngOnInit() {
  }

  todo = {}

  logForm() {
    this.getCategoryNews(this.todo)
  }

}
