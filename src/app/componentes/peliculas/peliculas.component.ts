import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss'],
})
export class PeliculasComponent implements OnInit {

  @Input() peliculas: Result[]

  constructor() { }

  ngOnInit() {}

}
