import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  @Input() news: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.news)
  }

}
