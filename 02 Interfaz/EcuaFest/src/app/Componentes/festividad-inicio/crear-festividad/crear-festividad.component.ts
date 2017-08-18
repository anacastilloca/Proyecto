import { Component, OnInit } from '@angular/core';
import {FestividadService} from "../../../Servicios/festividad.service";
import {FestividadClass} from "../../../Clases/FestividadClass";

@Component({
  selector: 'app-crear-festividad',
  templateUrl: './crear-festividad.component.html',
  styleUrls: ['./crear-festividad.component.css']
})
export class CrearFestividadComponent implements OnInit {

  festividades:FestividadClass[]=[];
  nuevaFestividad:FestividadClass = new FestividadClass("");
  constructor(private _festividadServicio:FestividadService) { }

  ngOnInit() {
  }

  crearFestividad(FestividadFormulario){
    this._festividadServicio.crearFestividad(this.nuevaFestividad)
      .subscribe(
        (festividadCreada:FestividadClass) => {
          this.festividades.push(festividadCreada);
          this.nuevaFestividad = new FestividadClass();
        },
        error => {
          console.log("Error",error);
        }
      )
  }

}
