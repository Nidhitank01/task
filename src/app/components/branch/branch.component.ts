import { Component } from '@angular/core';
import { Branch } from 'src/app/Model/Branch.Model';
import { BranchService } from 'src/app/Services/branch.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit{
 
  BranchList:Branch[]=[]
  constructor(private BranchService:BranchService){

  }
  ngOnInit(){
    this.BranchService.setBranchList()
    this.BranchList=JSON.parse(this.BranchService.getBranchList())
  }

}
