import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit {

	private peli: any;
	private aInicio: boolean;

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute) {
  	activatedRoute.params.subscribe(p => {
  		let desde = Number(p.desde)
  		this.peli = peliculasService.getPelicula(p.id, desde);
  		this.aInicio = desde >= 1 && desde <= 3;
  	});
  	
  }

  ngOnInit() {
  }

}
