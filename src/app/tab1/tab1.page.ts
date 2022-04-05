import { Component, OnInit } from '@angular/core';
import { PeliService } from '../servicios/peli.service';
import { Result } from 'src/app/interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculas: Result[]=[]


  ngOnInit(){

    this.cargarPelis();

  }

  
  constructor(private peliService: PeliService ) {}
  cargarPelis(event?){
    this.peliService.getToHeadLines()
      .subscribe(resp => {
        console.log(event);
  
          if(resp.results.length ===0 ){
            event.target.disabled = true;
            return;
          }
  
          this.peliculas.push(...resp.results);
  
          if(event){
            event.target.complete();
          }
        })
    }

}
