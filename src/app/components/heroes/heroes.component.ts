import { Component, OnInit } from '@angular/core';
import { Heroe } from './heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) {

    this.heroesService.getHeroes()
      .subscribe( data => {
        this.heroes = data;
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  eliminar(key$: string) {
    this.heroesService.delete(key$)
      .subscribe( data => {
        if ( data ) {
          console.error('error al eliminar');
        } else {
          delete this.heroes[key$];
        }
      } );
  }

}
