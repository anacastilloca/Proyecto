import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { FestividadInicioComponent } from './Componentes/festividad-inicio/festividad-inicio.component';
import {UrlService} from "./Servicios/url.service";
import {FestividadService} from "./Servicios/festividad.service";
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    FestividadInicioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,

  ],
  providers: [
    UrlService,
    FestividadService
  ],
  bootstrap: [FestividadInicioComponent]
})

export class AppModule { }

