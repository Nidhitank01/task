import { Injectable } from '@angular/core';
import { Company } from '../Model/Company.Model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  favorite:string[]=[]
  addfavorite=new Subject<Company>()
  AllCompany:Company[]=[
    {
      id:1,
      CompanyName:'BTL'
    },
    {
      id:2,
      CompanyName:'Webelight'
    },
    {
      id:3,
      CompanyName:'blueDrwafTech'
    }
  ]
  setCompanyList(){
    return localStorage.setItem('CompanyList',JSON.stringify(this.AllCompany))
  }
  getCompanyList(){
    return new Observable<Company[]>((emp)=>{
      setTimeout(()=>{
        emp.next(JSON.parse(localStorage.getItem('CompanyList')))
      },1000)
    })
}
addToFav(company:Company){
  this.addfavorite.next(company)
}
}
