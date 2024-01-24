import { Injectable } from '@angular/core';
import { Branch } from '../Model/Branch.Model';

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
    return localStorage.getItem('BranchList')
}
}
