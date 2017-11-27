import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent {

	private peli: any;
  private aInicio: boolean;

  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router) {
  	activatedRoute.params.subscribe(p => {
  		let desde = Number(p.desde);
      let id = Number(p.id);
  		this.aInicio = desde >= 1 && desde <= 3;
      switch (desde) {
        case 1: peliculasService.cartelera.subscribe(datos => {
          for(let peli of datos.results){
            if(peli.id == id) {
              this.peli = peli; return;
            }
          }
        });
        break;
        case 2: peliculasService.populares.subscribe(datos => {
          for(let peli of datos.results){
            if(peli.id == id){
              this.peli = peli; return;
            }
          }
        });
        break;
        case 3: peliculasService.ninos.subscribe(datos => {
          for(let peli of datos.results){
            if(peli.id == id){
              this.peli = peli; return;
            }
          }
        });
       break;
      }
  	});
  	
  }

  regresar(){
    if(this.aInicio) this.router.navigate(['/inicio']);
  }

}
