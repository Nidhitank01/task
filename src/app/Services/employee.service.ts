import { Injectable } from '@angular/core';
import { Employee } from '../Model/Employee.Model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  addEvent=new Subject<Employee>()
  // {id:null,EmployeeName:null,CompanyName:null,BranchName:null,Position:null,Gender:null,BirthDate:new Date()}
  // AddEmployeeFormFilled=new BehaviorSubject<Employee>({id:null,EmployeeName:null,Position:null,})
  // isSubmit:boolean=false
  AllEmployee:Employee[]=[
    {
      id:1,
      EmployeeName:'Nidhi',
      CompanyName:'BTL',
      BranchName:'Ahemdabad',
      Position:'senior',
      Gender:'Female',
      BirthDate:'2004-01-19'

    },
    {
      id:2,
      EmployeeName:'Priyanka',
      CompanyName:'BlueDrawfTech',
      BranchName:'Surat',
      Position:'junior',
      Gender:'Female',
      BirthDate:'2001-07-26'
    },
    {
      id:3,
      EmployeeName:'Ronak',
      CompanyName:'Braintech labs',
      BranchName:'Ahemdabad',
      Position:'new joinee',
      Gender:'Male',
      BirthDate:'2003-07-09'

    },
    {
      id:4,
      EmployeeName:'Urvish',
      CompanyName:'BTL',
      BranchName:'Surat',
      Position:'junior',
      Gender:'Male',
      BirthDate:'2002-05-25'
    }
  ]
  constructor() { }


  setEmployeeList(){
    return localStorage.setItem('EmployeeList',JSON.stringify(this.AllEmployee))
  }

  getEmployeeList(){
    return new Observable<Employee[]>((emp)=>{
      debugger
      setTimeout(()=>{
        emp.next(this.AllEmployee)
      },1000)
    })
    // return localStorage.getItem('EmployeeList')
  }
  
  addEmployee(employee:Employee){
     this.AllEmployee.push(employee)
     console.log(this.AllEmployee)
  }

  
}
