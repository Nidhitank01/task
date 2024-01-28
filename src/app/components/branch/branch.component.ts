import { Component, ElementRef, ViewChild } from '@angular/core';
import { Branch } from 'src/app/Model/Branch.Model';
import { BranchService } from 'src/app/Services/branch.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit{
 allow:string;
 @ViewChild('Id') BranchId:ElementRef;
 @ViewChild('BName')BranchName:ElementRef;
 disabled=true
  BranchList:Branch[]=[]
  constructor(private BranchService:BranchService,private route:ActivatedRoute){

  }
  ngOnInit(){
    this.BranchService.setBranchList()
    this.BranchList=JSON.parse(this.BranchService.getBranchList())
    this.allow=this.route.snapshot.queryParams['role']
    
  }
  
 onEdit(){
  console.log(this.BranchId.nativeElement.value)
  this.BranchId.nativeElement.disabled===false?this.BranchId.nativeElement.disabled=true:this.BranchId.nativeElement.disabled=false
  this.BranchName.nativeElement.disabled===false?this.BranchName.nativeElement.disabled=true:this.BranchName.nativeElement.disabled=false
  
 }
 onDelete(branch:Branch){

 }
}
