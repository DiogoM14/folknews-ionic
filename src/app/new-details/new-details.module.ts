import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDetailsPageRoutingModule } from './new-details-routing.module';

import { NewDetailsPage } from './new-details.page';
import { HeaderNewDetailsPage } from '../header-new-details/header-new-details.page';
import { TabsPage } from '../tabs/tabs.page';
import { CommentariesPage } from '../commentaries/commentaries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDetailsPageRoutingModule
  ],
  declarations: [NewDetailsPage, HeaderNewDetailsPage, TabsPage, CommentariesPage]
})
export class NewDetailsPageModule {}
