import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../Model/User.Model';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('username') username:ElementRef|any;
  @ViewChild('emailId')emailId:ElementRef|any;
  @ViewChild('password')password:ElementRef|any;
  @ViewChild('repeatpassword')repeatPassword:ElementRef|any;
  signUser:User;
  constructor(private userService:LoginService,private router:Router){}
 onSignup(){
   if(this.password.nativeElement.value===this.repeatPassword.nativeElement.value){
      if(this.userService.getUserInfo(this.username.nativeElement.value)){
        alert('user already exist')
        this.router.navigate([''])
      }
      else{
        this.signUser={
          id: this.userService.AllLoginData.length+1,
          user:this.username.nativeElement.value,
          password:this.password.nativeElement.value,
          role:'baseUser'}
        this.userService.AllLoginData.push(this.signUser)
        console.log(this.userService.AllLoginData)
        this.router.navigate([''])
      }
   }
   else{
    alert('password does not match!')
   }
 }
}
