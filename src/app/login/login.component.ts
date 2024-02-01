import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../Model/User.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() UserLogin:User
  AllData:User[]=[]
  @ViewChild('username') username:ElementRef;
  @ViewChild('password')password:ElementRef;
  permission:any
  constructor(private loginService:LoginService,private router:Router,private route:ActivatedRoute){

  }
  ngOnInit(){
    this.loginService.setInfo()
  }
 allow:string;
  onLoggedIn(){
    this.AllData=this.route.snapshot.data['userData']
  //  console.log(this.username.nativeElement.value,this.password.nativeElement.value)
   if(localStorage.getItem(this.username.nativeElement.value)){
    this.UserLogin=JSON.parse(localStorage.getItem(this.username.nativeElement.value))
    if(this.UserLogin.user===this.username.nativeElement.value && this.UserLogin.password===this.password.nativeElement.value){
      alert('login sucessfull')
      this.loginService.CreateSession(this.UserLogin)
      sessionStorage.setItem('access','allowed')

      this.loginService.getUser(this.UserLogin.user)
      
     this.UserLogin.role==='SuperAdmin' ? this.allow='SuperAdmin' :this.UserLogin.role==='Admin' ? this.allow='Admin':this.allow='baseUser'
    console.log(this.permission)
      this.router.navigate(['home',this.UserLogin.user],{queryParams:{role:this.UserLogin.role},queryParamsHandling:"merge"})
    }
  }
  else{
    alert("please enter valid user name and password")
  }
}
onRegister(){
  
  this.router.navigate(['signup'])
}
}
