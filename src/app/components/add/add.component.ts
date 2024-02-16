import { Component, DoCheck, Input, OnChanges, OnInit, Output, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/Services/branch.service';
import { CompanyService } from 'src/app/Services/company.service';
import { routeChanged } from 'src/app/Services/auth-gaurd.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Model/Employee.Model';
// import { EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { values } from 'lodash';
import { Company } from 'src/app/Model/Company.Model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],

})
export class AddComponent implements OnInit,OnChanges{
 


AddEmployee:FormGroup=null;
AddCompany:FormGroup=null;
AddBranch:FormGroup=null;
whichForm:string
add_edit:boolean=true
role= this.route.snapshot.queryParams['role']
EmployeeList=[]
CompanyList=[]
BranchList=[]
@Input() editEmployeeData:Employee
@Input()editCompanyData:Company
@Input() EmployeeId:number
@Output() cancel=new Subject<void>();
private editcompany:Subscription
constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute,private companyService:CompanyService,private branchService:BranchService ){
  this.EmployeeList=this.employeeService.AllEmployee.slice()
  this.CompanyList=this.companyService.AllCompany.slice()
  this.BranchList=this.branchService.AllBranch.slice()
  
}
ngOnInit(){
  routeChanged.subscribe((value)=>{this.whichForm=value})
  if(!this.editEmployeeData){
    this.add_edit=false
    this.editEmployeeData={
      id:null,
      EmployeeName:null,
      CompanyName:null,
      BranchName:null,
      Position:null,
      Gender:null,
      BirthDate:null,
    }
  }
  this.AddEmployee=new FormGroup({
  id:new FormControl(null),
  EmployeeName:new FormControl(this.editEmployeeData.EmployeeName,Validators.required),
  CompanyName:new FormControl(this.editEmployeeData.CompanyName,Validators.required),
  BranchName:new FormControl(this.editEmployeeData.BranchName,Validators.required),
  Position:new FormControl(this.editEmployeeData.Position,Validators.required),
  Gender:new FormControl(this.editEmployeeData.Gender,Validators.required),
  BirthDate:new FormControl(this.editEmployeeData.BirthDate,Validators.required)
})


if(!this.editCompanyData){
  this.add_edit=false
  this.AddCompany=new FormGroup({
    id:new FormControl(null),
    CompanyName:new FormControl(null,Validators.required)
  })
}
else{
  this.add_edit=true
  this.AddCompany=new FormGroup({
    id:new FormControl(this.editCompanyData.id),
    CompanyName:new FormControl(this.editCompanyData.CompanyName)
  })
}
  this.AddBranch=new FormGroup({
    id:new FormControl(null),
    BranchName:new FormControl(null,Validators.required)
  },)
  
}
ngOnChanges(): void {

}

onAdd(whichForm:string){
  if(whichForm==='employee' && this.AddEmployee.valid){
        if(this.add_edit){
        this.employeeService.editEmployee(this.EmployeeId,this.AddEmployee.value)
        this.employeeService.getEmployeeList
        this.cancel.next()
        }

        else{
          this.employeeService.addEmployee(this.AddEmployee.value)
          this.cancel.next()
        }
  }
  else if(whichForm==='company' && this.AddCompany.valid){
    if(this.add_edit){
     this.companyService.editCompany(this.AddCompany.value).subscribe((res:Company[])=>{
            this.companyService.companyAdd.next(res)
        })
        this.cancel.next()
      }
      else{
       this.companyService.addCompany(this.AddCompany.value).subscribe((res:Company[])=>{
        console.log("response",res)
           this.companyService.companyAdd.next(res)
        })

        this.cancel.next()
       }
  }
  else if(whichForm==='branches'){
      this.branchService.addBranch(this.AddBranch.value)
  }
  else{
    alert('Please fill the form correctly!')
  }
}

OnCancel(){
   this.cancel.next();
}


ExistEmployee(control:FormControl):boolean{ 
  if(!this.EmployeeList.find(e=>e.EmployeeName === control.value.EmployeeName)){
    return true
  }
  else{
     return null
  }
}
}
