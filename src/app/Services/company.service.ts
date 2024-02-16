import { Injectable } from '@angular/core';
import { Company } from '../Model/Company.Model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { get } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  favorite:Company[]=[]
  addfavorite=new Subject<Company>()
  AllCompany:Company[]
  companyAdd=new Subject<Company[]>();
  constructor(private http:HttpClient){}
  setCompanyList(){
    return this.http.post('http://localhost:3000/AllCompany',this.AllCompany).subscribe()
  }
  getCompanyFromServer(){
    return this.http.get('http://localhost:3000/AllCompany')
    
  }
  getCompanyList(){
    return new Observable<Company[]>((emp)=>{
      setTimeout(()=>{
        this.getCompanyFromServer().subscribe((res:Company[])=>{
            this.AllCompany=res
        })
        emp.next(this.AllCompany)
      },1000)
    })
}
addCompany(company:Company){
  this.http.post('http://localhost:3000/AllCompany',company).subscribe()
  this.getCompanyFromServer().subscribe(res=> console.log(res))
  return this.getCompanyFromServer()
}
editCompany(company:Company){
  this.http.put(`http://localhost:3000/AllCompany/${company.id}`,company).subscribe()
  return this.getCompanyFromServer()
}

deleteCompany(id:number){
  this.http.delete(`http://localhost:3000/AllCompany/${id}`).subscribe(()=>{
  })
  return this.getCompanyFromServer()
}

addToFav(company:Company){
  this.http.get(`http://localhost:3000/AllCompany/${company.id}`).subscribe((res:Company)=>{
    this.favorite.push(res)
  })
  this.addfavorite.next(company)
}
}
