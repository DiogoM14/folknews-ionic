import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderNewDetailsPageRoutingModule } from './header-new-details-routing.module';

import { HeaderNewDetailsPage } from './header-new-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderNewDetailsPageRoutingModule
  ],
  declarations: [HeaderNewDetailsPage]
})
export class HeaderNewDetailsPageModule {}
