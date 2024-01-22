import { Component, OnInit } from '@angular/core';
import { Movie } from "../Shared/Movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  standalone: false,
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  mavie:Movie | undefined
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieList = this.movieService.getMovies();
  }

  getMovie(movie: Movie){
    this.mavie=movie
  }
}
