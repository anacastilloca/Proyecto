/**
 * Created by USRDEL on 8/17/17.
 */
export class FoodClass{
  constructor(public nombrePlato?:string,
              public descripcionPlato?:string,
              public imagenFood?:string,
              public idFestividad?: number,
              public id?:number,
              public createdAt?:Date,
              public updatedAt?:Date,
              public editar?:boolean){}
}
