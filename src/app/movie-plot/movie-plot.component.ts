import { Component, Input, OnInit } from '@angular/core';
import { Movie } from "../Shared/Movie";
import { MovieService } from "../movie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movie-plot',
  templateUrl: './movie-plot.component.html',
  styleUrl: './movie-plot.component.css'
})
export class MoviePlotComponent implements OnInit {
  moviePlot: Movie | null = null
  constructor(private movieService: MovieService) { }
  getMovie() {
    this.moviePlot = this.movieService.getMovie()
  }
  ngOnInit() {
    this.getMovie()
  }
}
