import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../components/heroes/heroe';
import 'rxjs/add/operator/map';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Injectable()
export class HeroesService {

  heroesUrl: string = 'https://heroesapp-8cfdb.firebaseio.com/heroes.json';
  heroeUrl: string = 'https://heroesapp-8cfdb.firebaseio.com/heroes';

  constructor( private http: Http ) { }

  crearHeroe ( heroe: Heroe ) {
    const body: string = JSON.stringify( heroe );
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.heroesUrl, body, { headers } )
    .map( resp => {
      return resp.json();
    });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body: string = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${ this.heroeUrl }/${ key$ }.json`;

    return this.http.put(url, body, { headers })
      .map(resp => resp.json() );
  }

  getHeroes() {
    return this.http.get(this.heroesUrl)
      .map(resp => resp.json() );
  }

  getHeroe(key$: string) {
    const url = `${ this.heroeUrl}/${ key$ }.json`;
    return this.http.get( url )
      .map( resp => resp.json() );
  }

  delete( key$: string) {
    const url = `${this.heroeUrl}/${key$}.json`;
    return this.http.delete( url )
      .map( resp => resp.json() );
  }

}
