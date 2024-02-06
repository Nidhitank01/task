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
  sortBy:string
  bgcolor:string
  constructor(private router:Router ,private EmployeeService:EmployeeService,private route:ActivatedRoute){    
    this.allow=this.route.snapshot.queryParams['role']
    console.log(this.EmployeeList)
  }

  ngOnInit(){
    
    this.EmployeeList=this.route.snapshot.data['employeeData']
    console.log(this.EmployeeList)
  }

  ngOnChanges(){

    this.EmployeeService.setEmployeeList()
    this.EmployeeList=this.route.snapshot.data['employeeData']
    this.sortBy=this.route.snapshot.queryParams['sortBy']
    console.log(this.sortBy)
   }

  onEdit(Id: any, EName: any,position:any,companyName:any,branchName:any,gender:any,bdate:any) {
    
     Id.disabled = !Id.disabled;
     EName.disabled = !EName.disabled;
     position.disabled=!position.disabled;
     companyName.disabled=!companyName.disabled;
     branchName.disabled=!branchName.disabled
     gender.disabled=!gender.disabled;
     bdate.disabled=!bdate.disabled
    
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

// addEmployee(){
//  this.add=!this.add
//  if(this.add){
//    this.router.navigate(['./add',],{relativeTo:this.route,queryParamsHandling:"merge"})
//  }
// }

 sort(sortBy:string){
  this.EmployeeList.filter((emp,index)=>{
    if(emp.Position===sortBy){
       this.EmployeeList.unshift(emp)
       this.EmployeeList.splice(index+1,1)
    }
    else if(sortBy==='reset'){
      this.EmployeeList.sort((a,b)=>{return a.id-b.id})
    }
  })
}
}
