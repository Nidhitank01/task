import { DoCheck, Injectable, OnInit } from '@angular/core';
import { Employee } from '../Model/Employee.Model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
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

   getEmployeeFromServer(){
     return  this.http.get('http://localhost:3000/AllEmployee').subscribe((res:Employee[])=>{
       this.AllEmployee=res
     })
   }
   setEmployeeList(){
        return this.http.post('http://localhost:3000/AllEmployee',this.AllEmployee).subscribe()
   }

  getEmployeeList(){
    return new Observable<Employee[]>((emp)=>{
      setTimeout(()=>{ 
        this.getEmployeeFromServer()
        emp.next(this.AllEmployee)
      },1000)
    })
  }
  
  addEmployee(employee:Employee){
   this.http.post('http://localhost:3000/AllEmployee',employee).subscribe();
   this.getEmployeeFromServer() 
   return this.EmployeeListChanged.next(this.AllEmployee)
 }

 editEmployee(id:number,employee:Employee){
 return this.http.put( `http://localhost:3000/AllEmployee/${id}`,employee).subscribe();
 
 }

 deleteEmployee(id:number):Observable<Employee>{
  return this.http.delete<Employee>(`http://localhost:3000/AllEmployee/${id}`);
 }

}