import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Punto1PageRoutingModule } from './punto1-routing.module';

import { Punto1Page } from './punto1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Punto1PageRoutingModule
  ],
  declarations: [Punto1Page]
})
export class Punto1PageModule {}
