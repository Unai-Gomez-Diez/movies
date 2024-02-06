import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from "./movie-list/movie-list.component";
import {MoviePlotComponent} from "./movie-plot/movie-plot.component";
import {MoviePosterComponent} from "./movie-poster/movie-poster.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MoviePlotComponent,
    MoviePosterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

