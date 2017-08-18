import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {UrlService} from "./url.service";

@Injectable()
export class HotelService {
  url:string;
  modelo='Hotel';

  constructor(private _http:Http,private _urlService:UrlService){
    this.url=this._urlService.url+this.modelo;
  }
  presentarHotelPorFest(idFestividad:number){
    return this._http
      .get(this.url+"?idFestividad="+`${idFestividad}`)
      .map(res => {
        return res.json()
      })
  }

}
