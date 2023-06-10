import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-child',
  templateUrl: './button-child.component.html',
  styleUrls: ['./button-child.component.css']
})
export class ButtonChildComponent {
  @Input()
  name!: string;
@Output()
countChanged: EventEmitter<boolean> =   new EventEmitter();
// DcountChanged: EventEmitter<number> =   new EventEmitter();
// Agreed(){
//   this.Agree++;
//   this.AcountChanged.emit(this.Agree);
// }
// Disagreed(){
//   this.DisAgree++;
//   this.DcountChanged.emit(this.DisAgree);
voted=false;
vote(agree:boolean){
  this.countChanged.emit(agree);
  this.voted=true;
}

}
