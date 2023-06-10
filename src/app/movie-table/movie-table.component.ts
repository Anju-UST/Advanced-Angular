import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {
@Input()
  movieList: Array<string> = [];

constructor(){}

ngOnInit():void{}

@Output()
movieEventEmitter= new EventEmitter();
movieSelected(selectedMovie: string) { 
  this.movieEventEmitter.emit(selectedMovie);}
}