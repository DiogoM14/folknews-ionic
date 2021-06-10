import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaries',
  templateUrl: './commentaries.page.html',
  styleUrls: ['./commentaries.page.scss'],
})
export class CommentariesPage implements OnInit {
  @Input() commentary: any = [];

  constructor() { }

  ngOnInit() {
  }
}
