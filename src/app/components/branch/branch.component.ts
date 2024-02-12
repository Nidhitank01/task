import { Component, ElementRef, OnChanges, ViewChild } from '@angular/core';
import { Branch } from 'src/app/Model/Branch.Model';
import { BranchService } from 'src/app/Services/branch.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit,OnChanges {
  allow: string;
  @ViewChild('Id') BranchId: ElementRef;
  @ViewChild('BName') BranchName: ElementRef;
  disabled = true
  BranchList: Branch[]=[]

  constructor(private BranchService: BranchService, private route: ActivatedRoute) {
      this.BranchList=this.route.snapshot.data['branchData']
  }

  ngOnInit() {
    // this.BranchList = this.route.snapshot.data['Branchdata']
    this.allow = this.route.snapshot.queryParams['role']
    this.BranchService.setBranchList()
  }
  ngOnChanges(){
     this.BranchService.setBranchList()
     this.BranchList = this.route.snapshot.data['Branchdata']
  }
  
  onEdit(Id: any, BName: any) {
    
    Id.disabled = !Id.disabled;
    BName.disabled = !BName.disabled;
    
  }
  onUpdate(Id:any,Bname:any){
    this.BranchService.AllBranch.find((i)=>{
  
      if(i.id===parseInt(Id.value)){
        i.BranchName=Bname.value
        Id.disabled = !Id.disabled;
        Bname.disabled = !Bname.disabled;
        this.ngOnChanges()
      }
    })
    console.log(this.BranchList)
  
  }
  
  onDelete(branch: Branch) {
    console.log(typeof(branch.id))
      let index=this.BranchService.AllBranch.findIndex((i)=>{
        console.log(typeof(i.id))
             return i.id===branch.id
      })
      console.log(index)
      this.BranchService.AllBranch.splice(index,1)
      this.ngOnChanges()
      console.log(this.BranchList)
  }

  
}
