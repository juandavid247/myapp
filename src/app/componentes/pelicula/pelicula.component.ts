import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Result;
  @Input() indice: number;
  constructor() { }

  ngOnInit() {}
  
}
