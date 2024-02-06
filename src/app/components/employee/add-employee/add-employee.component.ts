import { Component, DoCheck, OnChanges, OnInit, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
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
constructor(private employeeService:EmployeeService,private router:Router,private route:ActivatedRoute){

}
ngOnInit(){
  this.AddEmployee=new FormGroup({
    id:new FormControl(this.employeeService.AllEmployee.length+1),
    EmployeeName:new FormControl(null),
    CompanyName:new FormControl(null),
    BranchName:new FormControl(null),
    Position:new FormControl(null),
    Gender:new FormControl(null),
    BirthDate:new FormControl(new Date().toLocaleDateString())
  })
}
ngOnChanges(): void {

}

onAdd(){
    this.employeeService.addEmployee(this.AddEmployee.value)
    this.router.navigate(['../'],{queryParams:{role:this.role},relativeTo:this.route,queryParamsHandling:"merge"})
}

}
