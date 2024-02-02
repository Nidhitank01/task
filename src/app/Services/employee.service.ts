import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee.Model';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  addEvent=new Subject<Employee>()

  AllEmployee:Employee[]=[
    {
      id:1,
      EmployeeName:'Nidhi',
      Position:'senior'
    },
    {
      id:2,
      EmployeeName:'Priyanka',
      Position:'junior'
    },
    {
      id:3,
      EmployeeName:'Ronak',
      Position:'new joinee'
    },
    {
      id:4,
      EmployeeName:'Urvish',
      Position:'junior'
    }
  ]
  constructor() { }
  setEmployeeList(){
    return localStorage.setItem('EmployeeList',JSON.stringify(this.AllEmployee))
  }
  getEmployeeList(){
    return new Observable<Employee[]>((emp)=>{
      setTimeout(()=>{
        emp.next(this.AllEmployee)
      },1000)
    })
    // return localStorage.getItem('EmployeeList')
  }
  
  addEmployee(employee:Employee){
    this.addEvent.next(employee)
  }

  
}
