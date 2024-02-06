// movie.service.ts
import { Injectable } from '@angular/core';
import { Movies } from './Shared/MockMovie';
import { Movie } from './Shared/Movie';
import { Observable, of } from 'rxjs';

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

  getMovie(): Observable<Movie> {
    return this.movie;
  }
}
