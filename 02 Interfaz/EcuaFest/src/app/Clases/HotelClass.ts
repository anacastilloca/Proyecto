/**
 * Created by USRDEL on 8/17/17.
 */
export class HotelClass{
  constructor(public nombreHotel?:string,
              public direccionHotel?:string,
              public imagenHotel?:string,
              public precioEstadia?:string,
              public id?:number,
              public createdAt?:Date,
              public updatedAt?:Date,
              public editar?:boolean){}
}

