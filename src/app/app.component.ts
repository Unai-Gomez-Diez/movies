import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies';
}
