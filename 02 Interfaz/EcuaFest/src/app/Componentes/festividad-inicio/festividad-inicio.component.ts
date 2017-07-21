import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-festividad-inicio',
  templateUrl: './festividad-inicio.component.html',
  styleUrls: ['./festividad-inicio.component.css']
})
export class FestividadInicioComponent implements OnInit {

  //Metodos para el llamdo de las imagenes
   // Encabezado
      banderaEcuador:string="assets/Imagenes/BanderaEcuador.png";
   //Carrusel
      img1:string="assets/Imagenes/Carrusel/Img1.jpg";
      img2:string="assets/Imagenes/Carrusel/Img2.jpg";
      img3:string="assets/Imagenes/Carrusel/Img3.jpg";
      img4:string="assets/Imagenes/Carrusel/Img4.jpg";


  constructor() { }

  ngOnInit() {
  }

}
