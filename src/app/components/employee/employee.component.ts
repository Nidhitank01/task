import { state } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee.Model';
import { User } from 'src/app/Model/User.Model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  allow:string
  EmployeeList:Employee[]=[]
  constructor(private router:Router ,private EmployeeService:EmployeeService,private route:ActivatedRoute){
  }
  ngOnInit(){
    this.allow=this.route.snapshot.queryParams['role']
    this.EmployeeService.setEmployeeList()
    this.EmployeeList=JSON.parse(this.EmployeeService.getEmployeeList())
  }
  
}
