import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { IonicModule } from '@ionic/angular';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [PeliculasComponent,PeliculaComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  exports:[PeliculasComponent]
})
export class ComponentesModule { }
