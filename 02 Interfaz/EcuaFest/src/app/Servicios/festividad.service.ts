import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {UrlService} from "./url.service";

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

}
