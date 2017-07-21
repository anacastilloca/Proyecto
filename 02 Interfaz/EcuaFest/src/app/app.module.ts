import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FestividadInicioComponent } from './Componentes/festividad-inicio/festividad-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    FestividadInicioComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [FestividadInicioComponent]
})
export class AppModule { }
