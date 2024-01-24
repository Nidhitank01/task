import { Component } from '@angular/core';
import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
 
  EmployeeList:Employee[]=[]
  constructor(private EmployeeService:EmployeeService){

  }
  ngOnInit(){
    this.EmployeeService.setEmployeeList()
    this.EmployeeList=JSON.parse(this.EmployeeService.getEmployeeList())
  }
}
