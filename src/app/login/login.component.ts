import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { User } from '../Model/User.Model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('username') username:ElementRef;
  @ViewChild('password')password:ElementRef;

  UserLogin:User
  constructor(private loginService:LoginService,private router:Router){
  
  }
  ngOnInit(){
    this.loginService.setInfo()
  }

  onLoggedIn(){
  //  console.log(this.username.nativeElement.value,this.password.nativeElement.value)
   if(localStorage.getItem(this.username.nativeElement.value)){
    this.UserLogin=JSON.parse(localStorage.getItem(this.username.nativeElement.value))
    if(this.UserLogin.user===this.username.nativeElement.value && this.UserLogin.password===this.password.nativeElement.value){
      alert('login sucessfull')
      this.loginService.CreateSession(this.UserLogin)
      this.router.navigate(['home'])
      
    }
  }
  else{
    console.log('key is not avail')
  }
}
onRegister(){
  
  this.router.navigate(['signup'])
}
}
