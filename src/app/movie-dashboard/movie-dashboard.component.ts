import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent {
  myMovies=["ABC","DEF","GHI"];
  

   selectedMovieToWatch(data: string) {
    debugger;
    alert(data);
  }
}
