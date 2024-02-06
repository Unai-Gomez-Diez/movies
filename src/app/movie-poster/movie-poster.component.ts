import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../Shared/Movie";
import { Movies } from "../Shared/MockMovie";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css'
})
export class MoviePosterComponent implements OnInit {
  movie: Movie | null = null

  constructor(private servie: MovieService) {

  }
  ngOnInit(): void {

    this.servie.getMovie()?.subscribe(
      (movie: Movie) => {
        this.movie = movie;
      }
  }
}
