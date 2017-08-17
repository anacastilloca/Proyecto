/**
 * Created by USRDEL on 8/17/17.
 */
export class UsuarioClass{
  constructor(public nombreUsuario?:string,
              public rolUsuario?:string,
              public correo?:string,
              public clave?:string,
              public id?:number,
              public createdAt?:Date,
              public updatedAt?:Date,
              public editar?:boolean){}
}

