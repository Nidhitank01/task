import { DoCheck, Injectable, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee.Model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {
  
  EmployeeListChanged=new Subject<Employee[]>()
  
  addEvent=new Subject<Employee>()

  searchEmployee=new Subject<string>()
  sortEmployee=new Subject<string>()

  AllEmployee:Employee[]=[]
  constructor(private http:HttpClient) {
       this.http.get('http://localhost:3000/AllEmployee').subscribe((res:Employee[])=>{
        this.AllEmployee=res
       })
       console.log("Employee list:",this.AllEmployee)
   }
   ngOnInit(){
    this.http.get('http://localhost:3000/AllEmployee').subscribe((res:Employee[])=>{
      this.AllEmployee=res
     })
     console.log("Employee list:",this.AllEmployee)
   }


  setEmployeeList(){
   return this.http.post('http://localhost:3000/AllEmployee',this.AllEmployee)
  }

  getEmployeeList(){
    return new Observable<Employee[]>((emp)=>{
      setTimeout(()=>{
        emp.next(this.AllEmployee)
      },1000)
    })
  }
  
  addEmployee(employee:Employee){
  
    this.http.post('http://localhost:3000/AllEmployee',employee).subscribe()
    this.EmployeeListChanged.next(this.AllEmployee)
    this.getEmployeeList()

 }

 editEmployee(id:number,employee:Employee){
  this.http.put( `http://localhost:3000/AllEmployee/${id}`,employee).subscribe();
  this.getEmployeeList();
 }
 
 deleteEmployee(id:number){
  this.http.delete(`http://localhost:3000/AllEmployee/${id}`).subscribe();
  console.log(this.AllEmployee)
  this.EmployeeListChanged.next(this.AllEmployee)
  this.getEmployeeList();
 }
}