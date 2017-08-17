import { Component, OnInit } from '@angular/core';
import {ActividadClass} from "../../../Clases/ActividadClass";
import {ActividadService} from "../../../Servicios/actividad.service";
import {FestividadClass} from "../../../Clases/FestividadClass";

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  actividades:ActividadClass[]=[];


  nuevaActividad:ActividadClass = new ActividadClass("");
  constructor(private _ActividadServicio:ActividadService) {
  }

  ngOnInit() {
    this._ActividadServicio.presentarActividadesPorFest(1)
      .subscribe(
        (actividades:ActividadClass[])=>{
          this.actividades=actividades.map(
            (actividad:ActividadClass)=>{
              console.log("ddd");
              actividad.editar=false;
              console.log("consulta "+actividad);
              return actividad;
            }
          );
        },
        error =>{
          console.log("Error de presentación",error)
        } );
  }

}
