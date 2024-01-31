import { Injectable } from "@angular/core"
import { User } from "../Model/User.Model"
import { ActivatedRoute } from "@angular/router"
import { map } from "rxjs"

@Injectable({
    providedIn:'root'
})
export class LoginService{
    permission:string[]=[]
    constructor(private route:ActivatedRoute){
     
    }
    userId:string
    // loginInfo:{user:string,password:string,role:string}|any
    AllLoginData:User[]=[
        {
            id:1,
            user:"SuperAdmin",
            password:"SuperAdmin",
            role:"SuperAdmin"
        },
        {
            id:2,
            user:"Admin",
            password:"Admin",
            role:"Admin"
        }
    ]

    setInfo(){
        this.AllLoginData.map((i)=>{
            localStorage.setItem(String(i.user),JSON.stringify(i))
        })
    }
   
    getUserInfo(user:string){
         return  localStorage.getItem(user)
    }
    CreateSession(userLogin:User){
        sessionStorage.setItem('User',JSON.stringify(userLogin))
         
    }

    getUser(user:string){
        this.userId=user
    }

    getAccess(){
        return sessionStorage.getItem('access')
    }

    DestroySession(userLogin:User){
        sessionStorage.clear()
    }
  
}