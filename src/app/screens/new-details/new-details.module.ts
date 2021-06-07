import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDetailsPageRoutingModule } from './new-details-routing.module';

import { NewDetailsPage } from './new-details.page';
import { HeaderNewDetailsPage } from '../../components/header-new-details/header-new-details.page';
import { TabsPage } from '../../components/tabs/tabs.page';
import { CommentariesPage } from '../../components/commentaries/commentaries.page';

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
