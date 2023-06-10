import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Increment';
  counter=5
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
