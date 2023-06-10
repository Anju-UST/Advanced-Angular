import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  Counter=5;
title: any;
  countChangedHandler(counter: number) {
    this.Counter = counter;
}
}
