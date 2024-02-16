import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../Model/User.Model';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // @ViewChild('username') username:ElementRef|any;
  // @ViewChild('emailId')emailId:ElementRef|any;
  // @ViewChild('password')password:ElementRef|any;
  // @ViewChild('repeatpassword')repeatPassword:ElementRef|any;
 
  signedUser:User
  reactiveFrom:FormGroup
  constructor(private userService:LoginService,private router:Router){}
  ngOnInit(){
      this.reactiveFrom=new FormGroup({
        user:new FormControl(null),
        emailId:new FormControl(null),
        password:new FormControl(null),
        repeatPassword :new FormControl(null)
      })
  }
 onSignup(){

   if(this.reactiveFrom.value.password===this.reactiveFrom.value.repeatPassword){
      if(this.userService.getUserInfo(this.reactiveFrom.value.user)){
        alert('user already exist')
        this.router.navigate([''])
      }
      else{
        this.signedUser={
          id:(this.userService.AllLoginData.length)+1,
          user:this.reactiveFrom.value.user,
          password:this.reactiveFrom.value.password,
          role:'baseUser'
        }
        this.userService.AllLoginData.push(this.signedUser)
        console.log(this.userService.AllLoginData)
        this.router.navigate([''])
      }
   }
   else{
    alert('password does not match!')
   }
 }
}
