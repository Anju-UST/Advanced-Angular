import { Component, OnInit } from '@angular/core';
import { StudentCrud } from '../Model/Student';
import { StudentserviceService } from '../Service/studentservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  student:StudentCrud=new StudentCrud();
  constructor(private service:StudentserviceService){}
  ngOnInit(): void {}
  
  onSubmit(){
    this.saveStudent();
     console.log(this.student);
  }
    saveStudent() {
     this.service.saveStudent(this.student).subscribe(data=>{console.log(data)},error=>console.log(error));
    }
  

}
