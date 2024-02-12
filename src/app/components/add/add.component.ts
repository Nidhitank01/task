import { Component, DoCheck, OnChanges, OnInit, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/Services/branch.service';
import { CompanyService } from 'src/app/Services/company.service';
import { routeChanged } from 'src/app/Services/auth-gaurd.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit,OnChanges{
 


AddEmployee:FormGroup=null;
AddCompany:FormGroup=null;
AddBranch:FormGroup=null;
whichForm:string
role= this.route.snapshot.queryParams['role']
EmployeeList=[]
CompanyList=[]
BranchList=[]
constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute,private companyService:CompanyService,private branchService:BranchService ){
 this.EmployeeList=this.employeeService.AllEmployee.slice()
this.CompanyList=this.companyService.AllCompany.slice()
this.BranchList=this.branchService.AllBranch.slice()
}
ngOnInit(){

  routeChanged.subscribe((value)=>{
    this.whichForm=value})

  this.AddEmployee=new FormGroup({
    id:new FormControl(this.employeeService.AllEmployee.length+1),
    EmployeeName:new FormControl(null,Validators.required),
    CompanyName:new FormControl(null,Validators.required),
    BranchName:new FormControl(null,Validators.required),
    Position:new FormControl(null,Validators.required),
    Gender:new FormControl(null,Validators.required),
    BirthDate:new FormControl(new Date(),Validators.required)
  },this.ExistEmployee.bind(this))
 
  this.AddCompany=new FormGroup({
    id:new FormControl(this.CompanyList.length+1),
    CompanyName:new FormControl(null,Validators.required)
  },)

  this.AddBranch=new FormGroup({
    id:new FormControl(this.CompanyList.length+1),
    BranchName:new FormControl(null,Validators.required)
  },)
  
}
ngOnChanges(): void {

}

onAdd(whichForm:string){
  if(whichForm==='employee' && this.AddEmployee.valid){
    this.employeeService.addEmployee(this.AddEmployee.value)
  }
  else if(whichForm==='company' ){
    console.log(this.AddCompany.value);
    
    this.companyService.addCompany(this.AddCompany.value)
  }
  else if(whichForm==='branches'){
      this.branchService.addBranch(this.AddBranch.value)
  }
  else{
    alert('Please fill the form correctly!')
  }
  this.router.navigate(['../'],{queryParams:{role:this.role},relativeTo:this.route,queryParamsHandling:"merge"})
}
ExistEmployee(control:FormControl):boolean{ 
  if(!this.EmployeeList.find(e=>e.EmployeeName === control.value.EmployeeName)){
    return true
  }
  else{
     return null
  }
}

// ExistCompany(control:FormControl):boolean{
//   if(!this.CompanyList.find(c=> c.CompanyName=== control.value.CompanyName)){
//     return true;
//   }
//   else{
//     return null
//   }
// }

}
