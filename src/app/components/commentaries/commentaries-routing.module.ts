import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentariesPage } from './commentaries.page';

const routes: Routes = [
  {
    path: '',
    component: CommentariesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentariesPageRoutingModule {}
