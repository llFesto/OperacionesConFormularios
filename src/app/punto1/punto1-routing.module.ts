import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Punto1Page } from './punto1.page';

const routes: Routes = [
  {
    path: '',
    component: Punto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Punto1PageRoutingModule {}
