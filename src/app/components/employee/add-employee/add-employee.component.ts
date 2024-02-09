import { Component, DoCheck, OnChanges, OnInit, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, filter } from 'rxjs';
import { Employee } from 'src/app/Model/Employee.Model';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit,OnChanges{
 


AddEmployee:FormGroup=null;
 role= this.route.snapshot.queryParams['role']
EmployeeList=[]
constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute){
 this.EmployeeList=this.employeeService.AllEmployee
}
ngOnInit(){
  this.AddEmployee=new FormGroup({
    id:new FormControl(this.employeeService.AllEmployee.length+1),
    EmployeeName:new FormControl(null,Validators.required),
    CompanyName:new FormControl(null,Validators.required),
    BranchName:new FormControl(null,Validators.required),
    Position:new FormControl(null,Validators.required),
    Gender:new FormControl(null,Validators.required),
    BirthDate:new FormControl(new Date(),Validators.required)
  },this.ExistEmployee.bind(this))
}
ngOnChanges(): void {

}

onAdd(){
  if(this.AddEmployee.valid){
    this.employeeService.addEmployee(this.AddEmployee.value)
    this.router.navigate(['../'],{queryParams:{role:this.role},relativeTo:this.route,queryParamsHandling:"merge"})
  }
  else{
    alert('Please fill the form correctly!')
  }
}

ExistEmployee(control:FormControl):boolean{
  console.log(control.value.EmployeeName);
  console.log(this.EmployeeList.includes(control.value.EmployeeName));
  console.log('employee:',this.EmployeeList.find(e=>e.EmployeeName === control.value.EmployeeName));
  
  if(!this.EmployeeList.find(e=>e.EmployeeName === control.value.EmployeeName)){
    return true
  }
  else{
     return null
  }
}


}
