import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Punto2Page } from './punto2.page';

const routes: Routes = [
  {
    path: '',
    component: Punto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Punto2PageRoutingModule {}
