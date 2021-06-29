import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.page.html',
  styleUrls: ['./punto2.page.scss'],
})
export class Punto2Page implements OnInit {
  public valorI: number= 10000;
  public porcentaje2: number= .02;
  public resultado: number= this.valorI + (this.valorI * this.porcentaje2);
  

  constructor(public NC:NavController, public AR:ActivatedRoute) { }

  ngOnInit() {
  }

  Interes(){

    for (let i= 0; i < 11; i++){
      this.valorI= this.valorI + (this.valorI * this.porcentaje2);   
    }

  }

}
