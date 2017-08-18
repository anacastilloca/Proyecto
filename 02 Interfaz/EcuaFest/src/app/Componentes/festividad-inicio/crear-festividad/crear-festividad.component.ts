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
    let festividadACrearse:FestividadClass =
      new FestividadClass (FestividadFormulario.value.nombre,"123456");
    /*
     let usuario = {
     nombre:"valor",
     id:undefined,
     createdAt:undefined,
     updatedAt:undefined,
     editar:undefined
     }
     */
    this._festividadServicio.crearFestividad(festividadACrearse)
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
