import { Component, OnInit } from '@angular/core';
import {Movie} from "../Shared/Movie";
import {MovieService} from "../movie.service";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movieList: Movie[] | undefined

  constructor(private movieService:MovieService) {
  }
  ngOnInit() {
    this.movieList=this.movieService.getMovies()
  }

}
