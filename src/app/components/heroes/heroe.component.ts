import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from './heroe';
import { HeroesService } from '../../services/heroes.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe = new Heroe('', '', '');
  id: string;

  constructor(private heroesService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => this.id = params['id']);
   }

  ngOnInit() {
    if (this.id === 'nuevo') {
      console.log('nuevo');
    } else {
      this.heroesService.getHeroe( this.id )
        .subscribe( data => {
          console.log('data::', data );
          this.heroe = data;
        });
    }
  }

  guardar() {
    if ( this.id === 'nuevo' ) {
      this.heroesService.crearHeroe(this.heroe)
        .subscribe(data => {
          /* this.router.navigate(['/heroe', data['name']]); */
          this.router.navigate(['/heroes']);
        },
        error => {
          console.error('error');
        });
    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          console.log('data', data );
        },
        error => {
          console.error('error');
        });
    }
  }

  agregarNuevo(form: NgForm ) {
    console.log('reset', this.heroe, form);
    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({});
  }

}
