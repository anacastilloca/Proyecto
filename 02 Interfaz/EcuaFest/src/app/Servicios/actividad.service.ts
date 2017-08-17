import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UrlService} from "./url.service";

@Injectable()
export class ActividadService {
  url:string;
  modelo='Actividad';

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
      .get(this.url+"?idFestividad="+`${idFestividad}`)
      .map(res => {
        return res.json()
      })
  }

}
