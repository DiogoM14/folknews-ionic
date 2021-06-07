import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderNewDetailsPage } from './header-new-details.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderNewDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderNewDetailsPageRoutingModule {}
