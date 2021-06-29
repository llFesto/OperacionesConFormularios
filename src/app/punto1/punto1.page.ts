import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.page.html',
  styleUrls: ['./punto1.page.scss'],
})
export class Punto1Page implements OnInit {
  public valorI: number= 5000;
  public porcentaje15: number= .15;
  public porcentaje20: number= .20;
  public id2: String;

  public resultado: number= this.valorI - (this.valorI * this.porcentaje15);
  public resultado2: number= this.valorI - (this.valorI * this.porcentaje20);

  constructor(public NC:NavController, public AR:ActivatedRoute) { }

  ngOnInit() {
    let id= this.AR.snapshot.paramMap.get('id');
    this.id2= id;
    
    alert(this.id2);
  }

}
