import { Component, OnInit } from '@angular/core';
import { StudentCrud } from '../Model/Student';
import { StudentserviceService } from '../Service/studentservice.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  constructor(private service:StudentserviceService)
  {
    
  }
  students: StudentCrud[]=[];
  ngOnInit(): void {
    this.students = this.getStudents();
  }

  getStudents():any{
    this.service.getStudents().subscribe((students: StudentCrud[])=>{
    this.students = students;
  });
  }
}

