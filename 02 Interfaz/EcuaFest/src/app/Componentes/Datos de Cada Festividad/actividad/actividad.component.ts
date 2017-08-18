import { Component, OnInit } from '@angular/core';
import {ActividadClass} from "../../../Clases/ActividadClass";
import {ActividadService} from "../../../Servicios/actividad.service";
import {FestividadClass} from "../../../Clases/FestividadClass";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  actividades:ActividadClass[]=[];


  nuevaActividad:ActividadClass = new ActividadClass("");
  constructor(private _ActividadServicio:ActividadService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let params: any = this._activatedRoute.snapshot.params;
    this._ActividadServicio.presentarActividadesPorFest(params.idFestividadDeActi)
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
