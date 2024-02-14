import { state } from '@angular/animations';
import { Component, ComponentFactoryResolver, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee.Model';
import { User } from 'src/app/Model/User.Model';
import { EmployeeService } from 'src/app/Services/employee.service';
import { AddComponent } from '../add/add.component';
import { FormGroup } from '@angular/forms';
import { FormDirective } from 'src/app/Directives/form.directive';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit,OnChanges,DoCheck {
  allow:string
  EmployeeList:Employee[]=[]
  permission:any
  add:boolean=false
  sortBy:string
  bgcolor:string
  type:string='text'
  searchFor:string
  private closeForm:Subscription;
  click:boolean=false
  constructor(private router:Router ,
    private EmployeeService:EmployeeService,
    private route:ActivatedRoute){    
    this.allow=this.route.snapshot.queryParams['role']
    console.log(this.EmployeeList)
    console.log(this.route.snapshot);
  }
  @ViewChild('edit')editMode:boolean=false
  @ViewChild('#BDate')bdate:ElementRef
 editEmployee:Employee
 @ViewChild(FormDirective) formHost:FormDirective;
 
 ngOnInit(){
   
    this.EmployeeService.EmployeeListChanged.subscribe((value)=>{
      this.EmployeeList=value
    })
    this.EmployeeList=this.route.snapshot.data['employeeData'] 
    
    this.EmployeeService.sortEmployee.subscribe((value)=>{
      this.sortBy=value
    })
  }

  ngOnChanges(){
    this.EmployeeService.setEmployeeList()
    this.EmployeeList=this.route.snapshot.data['employeeData']
   }

  ngDoCheck(){
    this.EmployeeService.searchEmployee.subscribe((value)=>{
      this.searchFor=value
   }) 
  
  }


  onEdit(id,employee) {
    this.click=true
    const hostViewContaierRef=this.formHost.viewContainerRef;
    hostViewContaierRef.clear()
    const componetRef= hostViewContaierRef.createComponent(AddComponent)
    componetRef.instance.editEmployeeData=employee
    componetRef.instance.EmployeeId=id
   this.closeForm=componetRef.instance.cancel.subscribe(()=>{
        this.closeForm.unsubscribe()
       hostViewContaierRef.clear()
   })
  }


  onDelete(id:number) {
    this.EmployeeService.deleteEmployee(id)
}


}
