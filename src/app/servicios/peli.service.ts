import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RootObject } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliService {

  constructor(private http: HttpClient) { }

  getToHeadLines(){
    return this.http.get<RootObject>(
      `https://api.themoviedb.org/3/movie/now_playing/?api_key=27b7a3e5d9594f1e18a0ac5668753fa3&append_to_response=videos&language=es`);
  }
}
