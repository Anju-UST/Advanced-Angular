import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChildApp';
  enterName="Anju";
  parentData="";
  parentChat="";
  enterChat="Hi Darling!!";
  value="";
  transferData(){
    this.parentData=this.enterName;
  }
  transferChat(){
    this.parentChat=this.enterChat;
  }
  sendData(value:string){

    this.value=value;
  }
}

