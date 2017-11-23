import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/Rx'; //map


@Injectable()
export class PeliculasService {

	private apikey: string = '6d9032319678aa34f6a83b37b17b26d5';
	private urlMoviedb: string = 'https://api.themoviedb.org/3/';

  private cartelera: any[];
  private populares: any[];
  private ninos: any[];
  private fecha: Date;

  constructor(private jsonp: Jsonp) {
    this.fecha = new Date();
    this.getCartelera();
    this.getPopulares();
    this.getPopularesNinos();
    console.log('Constructor Servicio Pelis');
  }

  getCartelera(){
    this.fecha.setTime(Date.now());
    let d1: number = this.fecha.getDay(), m1: number = this.fecha.getMonth()+1, a1: number = this.fecha.getFullYear();
    this.fecha.setTime(Date.now()-2678400000);
    let d2: number = this.fecha.getDay(), m2: number = this.fecha.getMonth()+1, a2: number = this.fecha.getFullYear();
    let url = `${ this.urlMoviedb }discover/movie?primary_release_date.gte=${a2}-${m2}-${d2}&primary_release_date.lte=${a1}-${m1}-${d1}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    this.jsonp.get(url).map(res => res.json()).subscribe(data => {
      if(!this.cartelera) this.cartelera = [];
      else this.cartelera.length = 0;
      this.cartelera.push(data.results.slice(0, 5));
      this.cartelera.push(data.results.slice(5, 10));
      this.cartelera.push(data.results.slice(10, 15));
    });
  }

  getPopulares(){
  	let url = `${ this.urlMoviedb }discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  	this.jsonp.get(url).map(res => res.json()).subscribe(data => {
      if(!this.populares) this.populares = [];
      else this.populares.length = 0;
      this.populares.push(data.results.slice(0, 5));
      this.populares.push(data.results.slice(5, 10));
      this.populares.push(data.results.slice(10, 15));
    });
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    this.jsonp.get(url).map(res => res.json()).subscribe(data => {
      if(!this.ninos) this.ninos = [];
      else this.ninos.length = 0;
      this.ninos.push(data.results.slice(0, 5));
      this.ninos.push(data.results.slice(5, 10));
      this.ninos.push(data.results.slice(10, 15));
    });
  }

  getPelicula(id: string, lista: number){
    switch (lista) {
      case 1: 
        for(let sublista of this.cartelera){
          for(let peli of sublista) if(peli.id == id) return peli;
        }
      case 2: 
        for(let sublista of this.populares){
          for(let peli of sublista) if(peli.id == id) return peli;
        }
      case 3: 
        for(let sublista of this.ninos){
          for(let peli of sublista) if(peli.id == id) return peli;
        }
      default: console.error('Pelicula no Encontrada'); return null;
    }
  }

  buscarPelicula(nombre: string){
  	let url = `${ this.urlMoviedb }search/movie?quiery=${ nombre }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  	return this.jsonp.get(url).map(res => res.json());
  }

}
