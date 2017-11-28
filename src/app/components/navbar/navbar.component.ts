import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

	private texto: string;

  constructor(private router: Router) { }

  buscar(){
  	this.router.navigate(['/buscar', this.texto]);
  }

}
