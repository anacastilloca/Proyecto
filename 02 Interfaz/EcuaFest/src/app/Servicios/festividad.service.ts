import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {UrlService} from "./url.service";
import {FestividadClass} from "../Clases/FestividadClass";

@Injectable()
export class FestividadService {

  url:string;
  modelo='Festividad';

  constructor(private _http:Http,private _urlService:UrlService){
    this.url=this._urlService.url+this.modelo;
  }

  presentarFestividades(){
    return this._http.get(this.url).map(res => {
      return res.json();
    })
  }

  presentarActividadesPorFest(idFestividad:number){
    return this._http
      .get(this.url+`/${idFestividad}`)
      .map(res => {
        return res.json()
      })
  }

  editar(festividad:FestividadClass, id:number){
    let datosAEnviar = {
      nombreFestividad:festividad.nombreFestividad,
      provinciaLugarFestividad:festividad.provinciaLugarFestividad,
      mesFestividad:festividad.mesFestividad,
      imagenLugarFestividad:festividad.imagenLugarFestividad
    };
    return this._http
      .put(this.url+`/${id}`,datosAEnviar)
      .map(res => {
        return res.json()
      })
  }
  borrarFestividad(festividad:FestividadClass,id:number){
    return this._http
      .delete(this.url+`/${id}`)
      .map(res => {
        return res.json()
      })
  }
}
