import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  constructor(private peliculasService: PeliculasService, private router: Router) {}

  ngOnInit() {}

  // detalle(id: number){
  // 	this.router.navigate(['/pelicula', id]);
  // }

}
