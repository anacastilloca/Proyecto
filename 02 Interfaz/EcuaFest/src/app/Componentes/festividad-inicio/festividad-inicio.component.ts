import { Component, OnInit } from '@angular/core';
import {FestividadClass} from "../../Clases/FestividadClass";
import {FestividadService} from "../../Servicios/festividad.service";

@Component({
  selector: 'app-festividad-inicio',
  templateUrl: './festividad-inicio.component.html',
  styleUrls: ['./festividad-inicio.component.css']
})
export class FestividadInicioComponent implements OnInit {

  //Metodos para el llamdo de las imagenes
   // Encabezado
      banderaEcuador:string="assets/Imagenes/EcuadorFlag.gif";

   //Carrusel
      img1:string="assets/Imagenes/Carrusel/Img1.jpg";
      img2:string="assets/Imagenes/Carrusel/Img2.jpg";
      img3:string="assets/Imagenes/Carrusel/Img3.jpg";
      img4:string="assets/Imagenes/Carrusel/Img4.jpg";

      DetalleClienteForm:boolean;
      variable:boolean=true;

  // LLamado a las Clase Festividad
   festividades:FestividadClass[]=[];
    nuevaFestividad:FestividadClass = new FestividadClass("");
    festividadLocal:FestividadClass;

  //Llamado del servicio
    constructor(private  _festividadServicio:FestividadService) { }

  ngOnInit() {
    this._festividadServicio.presentarFestividades()
      .subscribe(
        (festividades:FestividadClass[])=>{
         this.festividades=festividades.map(
           (festividad:FestividadClass)=>{
             festividad.editar=false;
             return festividad;
           }
         );
        },
      error =>{
          console.log("Error de presentación",error)
      } );
  }


  onClick(){
    this.DetalleClienteForm=true;
    this.variable=false;
  }

}


