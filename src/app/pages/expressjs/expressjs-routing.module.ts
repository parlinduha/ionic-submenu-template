import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpressjsPage } from './expressjs.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressjsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpressjsPageRoutingModule {}
