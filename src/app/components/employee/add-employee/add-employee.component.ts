import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Subject, filter } from 'rxjs';
import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
 


  AddEmployee:FormGroup=null;
// @ViewChild('form') employeeAdd:Component
//  add=new Subject<Employee>()
constructor(private employeeService:EmployeeService){

}

ngOnInit(){
  
  this.AddEmployee=new FormGroup({
    id:new FormControl(null),
    EmployeeName:new FormControl(null),
    Position:new FormControl(null)
  })

 


}

// this.employeeService.AllEmployee.push(this.AddEmployee.value)
// this.employeeService.setEmployeeList()
onAdd(){
  this.employeeService.addEmployee(this.AddEmployee.value)
  this.AddEmployee
}

}
