import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StudentCrud } from '../Model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

constructor(private http: HttpClient) { }
  baseUrl="http://localhost:8090/student";
  
  getStudents(){
    return this.http.get<StudentCrud[]>("http://localhost:8090/student/fetch/all");
  }
  
  // createStudent(student: object): Observable<object> {  
  //   return this.http.post(`${this.baseUrl}`+'create', student);  
  // }  
  saveStudent(student:StudentCrud):Observable<Object>{
    return this.http.post("http://localhost:8090/student/create",student);
  }
  getProductbyId(id:number):Observable<StudentCrud>{
    

  }
  
  
  
  getStudentById(id: number): Observable<StudentCrud> {
    return this.http.get<StudentCrud>(`http://localhost:8090/api/v2/fetch/${id}`);
  }
  
  updateStudent(student: StudentCrud): Observable<Object> {
    return this.http.put(`http://localhost:8090/api/v2/update/${student.id}`, student);
  }
  
  deleteStudent(id: number): Observable<StudentCrud> {
    return this.http.delete<StudentCrud>(`http://localhost:8090/api/v2/delete/${id}`);
  }
}
