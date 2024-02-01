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
  permission:any
  add:boolean=false
  constructor(private router:Router ,private EmployeeService:EmployeeService,private route:ActivatedRoute){
          
    this.EmployeeList=this.route.snapshot.data['employeeData']
    console.log(this.EmployeeList)
  }
  ngOnInit(){
    this.allow=this.route.snapshot.queryParams['role']
    this.EmployeeService.setEmployeeList()
    // this.EmployeeList=this.EmployeeService.getEmployeeList()
  }
  ngOnChanges(){
    this.EmployeeService.setEmployeeList()
    this.EmployeeList=this.route.snapshot.data['employeeData']
   }
  onEdit(Id: any, BName: any) {
    
    Id.disabled = !Id.disabled;
    BName.disabled = !BName.disabled;
    
  }
  onUpdate(Id:any,Bname:any){
    this.EmployeeService.AllEmployee.find((i)=>{
  
      if(i.id===parseInt(Id.value)){
        i.EmployeeName=Bname.value
        Id.disabled = !Id.disabled;
        Bname.disabled = !Bname.disabled;
        this.ngOnChanges()
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
addEmployee(){
 this.add=true
 this.router.navigate(['./add',],{relativeTo:this.route})
}
}
