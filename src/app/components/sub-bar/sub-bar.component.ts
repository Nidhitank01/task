import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { values } from 'lodash';
import { Subject } from 'rxjs';
import { Company } from 'src/app/Model/Company.Model';

import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-sub-bar',
  templateUrl: './sub-bar.component.html',
  styleUrls: ['./sub-bar.component.css']
})
export class SubBarComponent implements DoCheck{
  Search:string
  search=new Subject<string>()
  EmployeeList:Employee[]

  CompanyList:Company[]=[]
  allow:string
  sortBy:string
  cuurentRoute:any
  constructor(private EmployeeService:EmployeeService,private route:ActivatedRoute,private router:Router){
    this.allow=this.route.snapshot.queryParams['role']
  this.EmployeeList= this.EmployeeService.AllEmployee
  }

 ngDoCheck(){
   this.EmployeeService.searchEmployee.next(this.Search)
 }
  sort(sortBy:string){
    this.EmployeeService.sorting(sortBy)
  }
}
