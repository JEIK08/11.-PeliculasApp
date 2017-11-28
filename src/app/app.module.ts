import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

//Rutas

import { APP_ROUTING } from './app.routes';

//Servicios

import { PeliculasService } from './services/peliculas.service';

//Mis componentes

import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { InicioComponent } from './components/inicio/inicio.component';

//Pipes

import { CardImgPipe } from './pipes/card-img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscarComponent,
    DetalleComponent,
    InicioComponent,
    CardImgPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
