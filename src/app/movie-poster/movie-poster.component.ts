import {Component, Input} from '@angular/core';
import {Movie} from "../Shared/Movie";
import {Movies} from "../Shared/MockMovie";

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css'
})
export class MoviePosterComponent {
    @Input() moviePoster:Movie | undefined
}
