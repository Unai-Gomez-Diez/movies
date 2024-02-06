import { Component, OnInit } from '@angular/core';
import { Movie } from "../Shared/Movie";
import { MovieService } from "../movie.service";
import { Router, Routes } from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  standalone: false,
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  mavie: Movie | null = null
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieList = this.movieService.getMovies();
  }
  fullNavigate(movie: Movie) {
    this.getMovie(movie)


  }
  getMovie(movie: Movie) {
    this.mavie = movie
    this.movieService.setMovie(this.mavie)
  }


  navigateToPoster(movie: Movie) {
    this.mavie = movie
    if (this.mavie) {
      this.router.navigate(['/poster']);

      this.movieService.setMovie(this.mavie)
    }

  }
}
