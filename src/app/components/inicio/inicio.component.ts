import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

	private cartelera: any[];
	private populares: any[];
	private ninos: any[];

  constructor(private peliculasService: PeliculasService, private router: Router) {
  	console.log('Constructor Inicio');
  	this.cartelera = [];
  	this.populares = [];
  	this.ninos = [];
  	peliculasService.cartelera.subscribe(datos => {
  		this.cartelera.push(datos.results.slice(0,5));
  		this.cartelera.push(datos.results.slice(5,10));
  		this.cartelera.push(datos.results.slice(10,15));
  	});
  	peliculasService.populares.subscribe(datos => {
  		this.populares.push(datos.results.slice(0,5));
  		this.populares.push(datos.results.slice(5,10));
  		this.populares.push(datos.results.slice(10,15));
  	});
  	peliculasService.ninos.subscribe(datos => {
  		this.ninos.push(datos.results.slice(0,5));
  		this.ninos.push(datos.results.slice(5,10));
  		this.ninos.push(datos.results.slice(10,15));
  	});
  }

  ngOnInit() {}

  // detalle(id: number){
  // 	this.router.navigate(['/pelicula', id]);
  // }

}
