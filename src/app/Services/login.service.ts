import { Injectable } from "@angular/core"
import { User } from "../Model/User.Model"

@Injectable({
    providedIn:'root'
})
export class LoginService{
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
        sessionStorage.setItem(String(userLogin.user),JSON.stringify(userLogin))
    }
}