import { Component, OnInit,OnDestroy, Input, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { User } from 'src/app/Model/User.Model';
import { CompanyService } from 'src/app/Services/company.service';
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
 
  constructor(private router:Router,private logoutService:LoginService,private route:ActivatedRoute,private companyService:CompanyService){
   
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
