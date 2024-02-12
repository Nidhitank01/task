import { state } from '@angular/animations';
import { Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee.Model';
import { User } from 'src/app/Model/User.Model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
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
  constructor(private router:Router ,private EmployeeService:EmployeeService,private route:ActivatedRoute){    
    this.allow=this.route.snapshot.queryParams['role']
    console.log(this.EmployeeList)
    console.log(this.route.snapshot);
  }
  @ViewChild('edit')editMode:boolean=false
  @ViewChild('#BDate')bdate:ElementRef
  BdayHighLight={}
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

  onEdit(Id: any, EName: any,position:any,companyName:any,branchName:any,gender:any,bdate:any) {
    
     Id.disabled = !Id.disabled;
     EName.disabled = !EName.disabled;
     position.disabled=!position.disabled;
     companyName.disabled=!companyName.disabled;
     branchName.disabled=!branchName.disabled
     gender.disabled=!gender.disabled;
     bdate.disabled=!bdate.disabled
     bdate.type='date'
    
  }
  onUpdate(Id:any,Ename:any,position:any,companyName:any,branchName:any,gender:any,bdate:any){
    this.EmployeeService.AllEmployee.find((i)=>{
      if(i.id===parseInt(Id.value)){
        i.EmployeeName=Ename.value
        Id.disabled = !Id.disabled;
        Ename.disabled = !Ename.disabled;
        position.disabled=!position.disabled;
        companyName.disabled=!companyName.disabled;
        branchName.disabled=!branchName.disabled
        gender.disabled=!gender.disabled;
        if(bdate.type='date'){
          bdate.type='text'
        }
        else{
          bdate.type='date'
        }
       
        bdate.disabled=!bdate.disabled
      }
    })
    console.log(this.EmployeeList)
  
  }
  
  onDelete(Employee:Employee) {
    console.log(typeof(Employee.id))
      let index=this.EmployeeService.AllEmployee.findIndex((i)=>{
        console.log(typeof(i.id))
             return i.id===Employee.id
      })
      console.log("i",index)
      this.EmployeeService.AllEmployee.splice(index,1)
      this.ngOnChanges()
      console.log(this.EmployeeList)
  
}


}
