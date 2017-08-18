import {RouterModule, Routes} from "@angular/router";
import {ActividadComponent} from "./Componentes/Datos de Cada Festividad/actividad/actividad.component";
import {FoodComponent} from "./Componentes/Datos de Cada Festividad/food/food.component";
import {HotelComponent} from "./Componentes/Datos de Cada Festividad/hotel/hotel.component";
import {ModuleWithProviders} from "@angular/core";
import {FestividadInicioComponent} from "./Componentes/festividad-inicio/festividad-inicio.component";
import {AppComponent} from "./app.component";
import {EditarFestividadComponent} from "./Componentes/festividad-inicio/editar-festividad/editar-festividad.component";
export const rutass:Routes=[
  {
    path:"actividad/:idFestividadDeActi",
    component:ActividadComponent
  },{
    path:"food/:id",
    component:FoodComponent
  },{
    path:"hotel/:id",
    component:HotelComponent
  },
  {
    path:"",
    component:FestividadInicioComponent
  },{
    path:"edidarFestividad/:idFestividad",
    component:EditarFestividadComponent
  }

];
export const ModuloDeRutas:ModuleWithProviders=RouterModule.forRoot(rutass);
