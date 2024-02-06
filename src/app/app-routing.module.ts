import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MoviePosterComponent } from "./movie-poster/movie-poster.component";

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'poster', component: MoviePosterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
