import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx'; //map

@Injectable()
export class PeliculasService {

	private apikey: string = '6d9032319678aa34f6a83b37b17b26d5';
	private urlMoviedb: string = 'https://api.themoviedb.org/3/';

  cartelera: Observable<any>;
  populares: Observable<any>;
  ninos: Observable<any>;
  private fecha: Date;

  constructor(private jsonp: Jsonp) {
    this.fecha = new Date();
    this.getCartelera();
    this.getPopulares();
    this.getPopularesNinos();
  }

  getCartelera(){
    this.fecha.setTime(Date.now());
    let d1: number = this.fecha.getDay(), m1: number = this.fecha.getMonth()+1, a1: number = this.fecha.getFullYear();
    this.fecha.setTime(Date.now()-2678400000);
    let d2: number = this.fecha.getDay(), m2: number = this.fecha.getMonth()+1, a2: number = this.fecha.getFullYear();
    let url = `${ this.urlMoviedb }discover/movie?primary_release_date.gte=${a2}-${m2}-${d2}&primary_release_date.lte=${a1}-${m1}-${d1}&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    this.cartelera = this.jsonp.get(url).map(res => res.json());
  }

  getPopulares(){
  	let url = `${ this.urlMoviedb }discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  	this.populares = this.jsonp.get(url).map(res => res.json());
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb }discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    this.ninos = this.jsonp.get(url).map(res => res.json());
  }

  buscarPelicula(nombre: string){
  	let url = `${ this.urlMoviedb }search/movie?query=${ nombre }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
  	return this.jsonp.get(url).map(res => res.json());
  }

  buscarPeliculaId(id: string){
    let url = `${ this.urlMoviedb }movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map(res => res.json());
  }

}
