/**
 * Created by USRDEL on 8/17/17.
 */
export class ActividadClass{
  constructor(public nombreActividad?:string,
              public direccionActividad?:string,
              public descripcionActividad?:string,
              public fechaActividad?:string,
              public imagenActividad?:string,
              public idFestividad?: number,
              public id?:number,
              public createdAt?:Date,
              public updatedAt?:Date,
              public editar?:boolean){}
}
