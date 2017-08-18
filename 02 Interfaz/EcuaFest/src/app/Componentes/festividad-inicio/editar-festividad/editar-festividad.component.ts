import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FestividadClass} from "../../../Clases/FestividadClass";
import {FestividadService} from "../../../Servicios/festividad.service";
import {Http} from "@angular/http";
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-editar-festividad',
  templateUrl: './editar-festividad.component.html',
  styleUrls: ['./editar-festividad.component.css']
})
export class EditarFestividadComponent implements OnInit {

  festividadLocal:FestividadClass;
  festividades:FestividadClass[]=[];
  @Output() usuarioborrado = new EventEmitter();

  constructor(private _festividadServicio:FestividadService,private _http:Http,private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  actualizarFestividad(nombreFestividad?:string,provinciaLugarFestividad?:string,mesFestividad?:string,imagenLugarFestividad?:string){
    let params: any = this._activatedRoute.snapshot.params;
    let actualizacion={
      nombreFestividad:nombreFestividad,
      provinciaLugarFestividad:provinciaLugarFestividad
    };
    this._http.put("http://localhost:1337/Festividad/"+params.idFestividad,actualizacion).map(
      (res)=>{
        return res.json();
      }).subscribe(
      res=>{
        //el servidor nos dice que se actualizo
        console.log("El usuario se actualizo",res);


      },
      err =>{
        //Hubo algun problema (Red servidor)
        console.log("Hubo un error", err)
      }
    );
  }
  actualizarFestividadss(festividad:FestividadClass,nombreFestividad?:string,provinciaLugarFestividad?:string,mesFestividad?:string,imagenLugarFestividad?:string){
    let params: any = this._activatedRoute.snapshot.params;

    festividad.nombreFestividad=nombreFestividad;
    festividad.provinciaLugarFestividad=provinciaLugarFestividad;
    festividad.mesFestividad = mesFestividad;
    festividad.imagenLugarFestividad=imagenLugarFestividad;

    this._festividadServicio.editar(festividad, params.idFestividad)
      .subscribe(
        (festividadEditada:FestividadClass)=>{
          this.festividadLocal.nombreFestividad = nombreFestividad;
          this.festividadLocal.provinciaLugarFestividad=provinciaLugarFestividad;
          this.festividadLocal.mesFestividad = mesFestividad;
          this.festividadLocal.imagenLugarFestividad=imagenLugarFestividad;
          this.festividadLocal.editar = !this.festividadLocal.editar;
        },
        err=>{
          console.log("Hubo un error",err);
        }
      );
  }
}
