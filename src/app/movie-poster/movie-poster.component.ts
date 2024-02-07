import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../Shared/Movie";
import { Movies } from "../Shared/MockMovie";
import { MovieService } from '../movie.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {
  movie: Movie | null = null;

  constructor(private service: MovieService) {}

  ngOnInit(): void {
    this.service.getMovieObservable().subscribe(newMovie => {
      this.movie = newMovie;
    });
  }

}
