import { Injectable } from '@angular/core';
import {Movies} from "./Shared/MockMovie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesList = Movies
  getMovies(){
    return this.moviesList
  }
}
