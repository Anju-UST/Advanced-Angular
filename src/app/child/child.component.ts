import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Input()parentData1!:string;
  @Input()parentData2!:string;
  @Input()parentData3!:string;

  @Output()
  public submitdata= new EventEmitter<string>();
  submit(){
    this.submitdata.emit("Successfully submitted") ;
  }

}
