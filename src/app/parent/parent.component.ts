import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  Name ="";
  Phone="";
  dob="";
  parentData1="";
  parentData2="";
  parentData3="";

  viewDetails()
  {
    this.parentData1=this.Name;
    this.parentData2=this.Phone;
    this.parentData3=this.dob;
  }
  value="";
  submitdata(value:string){
    this.value=value;
  }
}


