import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee.Model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  AllEmployee:Employee[]=[
    {
      id:1,
      EmployeeName:'Nidhi'
    },
    {
      id:2,
      EmployeeName:'Priyanka'
    },
    {
      id:3,
      EmployeeName:'Ronak'
    },
    {
      id:4,
      EmployeeName:'Urvish'
    }
  ]
  constructor() { }
  setEmployeeList(){
    return localStorage.setItem('EmployeeList',JSON.stringify(this.AllEmployee))
  }
  getEmployeeList(){
    return localStorage.getItem('EmployeeList')
  }
}
