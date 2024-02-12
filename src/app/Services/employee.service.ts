import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee.Model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  EmployeeListChanged=new Subject<Employee[]>()
  
  addEvent=new Subject<Employee>()

  searchEmployee=new Subject<string>()
  sortEmployee=new Subject<string>()

  AllEmployee:Employee[]=[
    {
      id:1,
      EmployeeName:'Nidhi',
      CompanyName:'BTL',
      BranchName:'Ahemdabad',
      Position:'senior',
      Gender:'Female',
      BirthDate:new Date("2004-01-19")

    },
    {
      id:2,
      EmployeeName:'Priyanka',
      CompanyName:'BlueDrawfTech',
      BranchName:'Surat',
      Position:'junior',
      Gender:'Female',
      BirthDate:new Date("2002-07-26")
    },
    {
      id:3,
      EmployeeName:'Ronak',
      CompanyName:'Braintech labs',
      BranchName:'Ahemdabad',
      Position:'new joinee',
      Gender:'Male',
      BirthDate:new Date("2003-07-09")

    },
    {
      id:4,
      EmployeeName:'Urvish',
      CompanyName:'BTL',
      BranchName:'Surat',
      Position:'junior',
      Gender:'Male',
      BirthDate:new Date()
    }
  ]
  constructor() {

   }


  setEmployeeList(){
    return localStorage.setItem('EmployeeList',JSON.stringify(this.AllEmployee))
  }

  getEmployeeList(){
    return new Observable<Employee[]>((emp)=>{
      setTimeout(()=>{
        emp.next(this.AllEmployee)
      },1000)
    })
  }
  
  addEmployee(employee:Employee){
     this.AllEmployee.push(employee)
     localStorage.setItem('EmployeeList',JSON.stringify(this.AllEmployee))
     console.log(this.AllEmployee)
  }

}
