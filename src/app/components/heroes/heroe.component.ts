import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from './heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {

  }

  constructor() { }

  ngOnInit() {
  }

  guardar() {
    console.log("-----", this.heroe);
  }

}
