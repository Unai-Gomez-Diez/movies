// movie.service.ts
import { Injectable } from '@angular/core';
import { Movies } from './Shared/MockMovie';
import { Movie } from './Shared/Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  moviesList = Movies;
  movie: Movie | null = null;

  getMovies() {
    return this.moviesList;
  }

  setMovie(movie: Movie) {
    this.movie = movie;
  }

  getMovie() {
    return this.movie;
  }
}
