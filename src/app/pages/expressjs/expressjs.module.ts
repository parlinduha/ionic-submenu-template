import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpressjsPageRoutingModule } from './expressjs-routing.module';

import { ExpressjsPage } from './expressjs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpressjsPageRoutingModule
  ],
  declarations: [ExpressjsPage]
})
export class ExpressjsPageModule {}
