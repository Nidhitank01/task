import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { Company } from 'src/app/Model/Company.Model';
import { CompanyService } from 'src/app/Services/company.service';
import { AddComponent } from '../add/add.component';
import { FormDirective } from 'src/app/Directives/form.directive';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  CompanyList:Company[]=[]
  allow:string
  permission:any
  private closeForm:Subscription;
  private endEvent:Subscription;
  private deleteCompany:Subscription
  click:boolean=false
  
  @ViewChild(FormDirective) formHost:FormDirective;
  
  constructor(private CompanyService:CompanyService,private route:ActivatedRoute){
   
    this.CompanyList=this.route.snapshot.data['companyData']
  }
  ngOnInit(){
    this.allow=this.route.snapshot.queryParams['role']
    this.CompanyService.getCompanyList().subscribe((res:Company[])=>{
      this.CompanyList=res
    })
    
    this.CompanyService.companyAdd.subscribe((res:Company[])=>{
      console.log("r:",res)
      this.CompanyList=res
    })
    
  }
  
   getCompany(){
    this.CompanyService.getCompanyList().subscribe((res:Company[])=>{
      this.CompanyList=res
      console.log(this.CompanyList)
    })
   }

  onEdit(company:Company) {

    const hostViewContaierRef=this.formHost.viewContainerRef;
    hostViewContaierRef.clear()
    const componetRef= hostViewContaierRef.createComponent(AddComponent)
    componetRef.instance.editCompanyData=company
    this.closeForm=componetRef.instance.cancel.subscribe(()=>{
        this.closeForm.unsubscribe()
        hostViewContaierRef.clear()
   })
  }

  onDelete(id:number) {
     this.CompanyService.deleteCompany(id).subscribe((res:Company[])=>{
      if(res){
        console.log(res)
        this.CompanyList=res
      }
     });
  }

  addFav(company:Company){
    this.CompanyService.addToFav(company)
  }
}
