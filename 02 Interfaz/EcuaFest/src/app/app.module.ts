import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { FestividadInicioComponent } from './Componentes/festividad-inicio/festividad-inicio.component';
import {UrlService} from "./Servicios/url.service";
import {FestividadService} from "./Servicios/festividad.service";
import {HttpModule} from "@angular/http";
import { HotelComponent } from './Componentes/Datos de Cada Festividad/hotel/hotel.component';
import { FoodComponent } from './Componentes/Datos de Cada Festividad/food/food.component';
import { ActividadComponent } from './Componentes/Datos de Cada Festividad/actividad/actividad.component';
import {ModuloDeRutas} from "./rutas";
import {ActividadService} from "./Servicios/actividad.service";
import {FoodService} from "./Servicios/food.service";
import {HotelService} from "./Servicios/hotel.service";


@NgModule({
  declarations: [
    AppComponent,
    FestividadInicioComponent,
    HotelComponent,
    FoodComponent,
    ActividadComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    ModuloDeRutas

  ],
  providers: [
    UrlService,
    FestividadService,
    ActividadService,
    FoodService,
    HotelService
  ],
  bootstrap: [FestividadInicioComponent]
})

export class AppModule { }

