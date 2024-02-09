import { Component, OnInit,OnDestroy, Input, Output, DoCheck } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { Employee } from 'src/app/Model/Employee.Model';
import { User } from 'src/app/Model/User.Model';
import { CompanyService } from 'src/app/Services/company.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { LoginService } from 'src/app/Services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  user:User|any
  username:string; 
  allow:string
  permission:any
  showLoader:boolean=false
  EmployeeList:Employee[]
  constructor(private router:Router,private logoutService:LoginService,private route:ActivatedRoute,private companyService:CompanyService,private EmployeeService:EmployeeService){
    this.EmployeeList=EmployeeService.AllEmployee
  }
  ngOnInit(){
    this.username=this.route.snapshot.params['user'];
    this.user=JSON.parse(this.logoutService.getUserInfo(this.username))
  
  }

  
  logout(){
    this.logoutService.DestroySession(this.user)
    console.log('session is destroyed')
    this.router.navigate([''])
  }
 

}
