import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderCategoriesPageRoutingModule } from './header-categories-routing.module';

import { HeaderCategoriesPage } from './header-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderCategoriesPageRoutingModule
  ],
  declarations: [HeaderCategoriesPage]
})
export class HeaderCategoriesPageModule {}
