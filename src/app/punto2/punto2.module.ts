import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Punto2PageRoutingModule } from './punto2-routing.module';

import { Punto2Page } from './punto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Punto2PageRoutingModule
  ],
  declarations: [Punto2Page]
})
export class Punto2PageModule {}
