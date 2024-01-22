import {Component, Input} from '@angular/core';
import {Movie} from "../Shared/Movie";

@Component({
  selector: 'app-movie-plot',
  templateUrl: './movie-plot.component.html',
  styleUrl: './movie-plot.component.css'
})
export class MoviePlotComponent {
  @Input() moviePlot:Movie | undefined
}
