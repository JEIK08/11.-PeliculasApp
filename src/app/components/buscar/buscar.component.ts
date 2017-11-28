import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent {

	private nombre: string = '';
	private resultado: any[];

  constructor(private peliculasService: PeliculasService, private router: Router, private activatedRoute: ActivatedRoute) {
  	this.resultado = [];
  	activatedRoute.params.subscribe(p => {
  		if(p.nombre) this.nombre = p.nombre;
  		this.buscar();
  	});
  }

  buscar(){
  	if(this.nombre != ''){
  		this.peliculasService.buscarPelicula(this.nombre).subscribe(datos => {
	  		this.resultado = datos.results;
	  	});
  	}else this.resultado.length = 0;
  }

  ver(p: any){
  	this.router.navigate(['/'+this.nombre, p.id]);
  }

}
