import { Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, values } from 'lodash';
import { Subject, Subscription } from 'rxjs';
import { Company } from 'src/app/Model/Company.Model';
import { routeChanged } from 'src/app/Services/auth-gaurd.service';
import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeeService } from 'src/app/Services/employee.service';
import { CompanyService } from 'src/app/Services/company.service';
import { BranchService } from 'src/app/Services/branch.service';
import { FormDirective } from 'src/app/Directives/form.directive';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-sub-bar',
  templateUrl: './sub-bar.component.html',
  styleUrls: ['./sub-bar.component.css']
})
export class SubBarComponent implements DoCheck,OnInit{
  Search:string
  search=new Subject<string>()
  EmployeeList:Employee[]
  CompanyList:Company[]=[]
  allow:string
  sortBy:string
  currentRoute:any
  private closeForm:Subscription;
  @ViewChild(FormDirective)formHost:FormDirective;
  constructor(private EmployeeService:EmployeeService,private route:ActivatedRoute,private router:Router,
    private companyService:CompanyService,private branchService:BranchService){
    this.allow=this.route.snapshot.queryParams['role']
    this.EmployeeList= this.EmployeeService.AllEmployee
    
  }
ngOnInit(): void {
  routeChanged.subscribe((value)=>{
    this.currentRoute=value
    console.log("current:",this.currentRoute)
  })
}

 ngDoCheck(){
   this.EmployeeService.searchEmployee.next(this.Search)
 }

 sort(sortBy:string){
   this.sortBy=sortBy
   if(this.currentRoute==='employee'){

     this.EmployeeService.sortEmployee.next(this.sortBy)
   }
  
 }
 addEmployee(){

  const hostViewContaierRef=this.formHost.viewContainerRef;
  hostViewContaierRef.clear();
  const componetRef=hostViewContaierRef.createComponent(AddComponent);
  this.closeForm=componetRef.instance.cancel.subscribe(()=>{
    this.closeForm.unsubscribe()
   hostViewContaierRef.clear()
})
 }
 
}
