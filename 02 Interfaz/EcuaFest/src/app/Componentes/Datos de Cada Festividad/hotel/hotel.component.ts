import { Component, OnInit } from '@angular/core';
import {HotelClass} from "../../../Clases/HotelClass";
import {HotelService} from "../../../Servicios/hotel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hoteles:HotelClass[]=[];

  constructor(private _HotelesServicio:HotelService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let params: any = this._activatedRoute.snapshot.params;
    this._HotelesServicio.presentarHotelPorFest(params.idFestividadDeHotel)
      .subscribe(
        (hoteles:HotelClass[])=>{
          this.hoteles=hoteles.map(
            (hotel:HotelClass)=>{
              console.log("ddd");
              hotel.editar=false;
              console.log("consulta "+hotel);
              return hotel;
            }
          );
        },
        error =>{
          console.log("Error de presentación",error)
        } );
  }

}
