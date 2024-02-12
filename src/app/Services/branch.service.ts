import { Injectable } from '@angular/core';
import { Branch } from '../Model/Branch.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  AllBranch:Branch[]=[
    {
      id:1,
      BranchName:'Ahemdabad'
    },
    {
      id:2,
      BranchName:'Surat'
    },
    {
      id:3,
      BranchName:'Baroda'
    }
  ]
  
  setBranchList(){
    return localStorage.setItem('BranchList',JSON.stringify(this.AllBranch))
  }


  getBranchList(){
    return new Observable<Branch[]>((emp)=>{
      setTimeout(()=>{
        emp.next(JSON.parse(localStorage.getItem('BranchList')))
      },1000)
    })
}
addBranch(branch:Branch){
  
  this.AllBranch.push(branch)
  this.setBranchList()
}
}

