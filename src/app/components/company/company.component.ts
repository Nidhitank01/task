import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from 'src/app/Model/Company.Model';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  CompanyList:Company[]=[]
  allow:string
  constructor(private CompanyService:CompanyService,private route:ActivatedRoute){
  }
  ngOnInit(){
    this.allow=this.route.snapshot.queryParams['role']
    this.CompanyService.setCompanyList()
    this.CompanyList=JSON.parse(this.CompanyService.getCompanyList())
  }
   ngOnChanges(){
    this.CompanyService.setCompanyList()
    this.CompanyList=JSON.parse(this.CompanyService.getCompanyList()) 
   }
  onEdit(Id: any, BName: any) {
    
    Id.disabled = !Id.disabled;
    BName.disabled = !BName.disabled;
    
  }
  onUpdate(Id:any,Bname:any){
    this.CompanyService.AllCompany.find((i)=>{
  
      if(i.id===parseInt(Id.value)){
        i.CompanyName=Bname.value
        Id.disabled = !Id.disabled;
        Bname.disabled = !Bname.disabled;
        this.ngOnChanges()
      }
    })
    console.log(this.CompanyList)
  
  }
  
  onDelete(company:Company) {
    console.log(typeof(company.id))
      let index=this.CompanyService.AllCompany.findIndex((i)=>{
        console.log(typeof(i.id))
             return i.id===company.id
      })
      console.log("i",index)
      this.CompanyService.AllCompany.splice(index,1)
      this.ngOnChanges()
      console.log(this.CompanyList)
  }
}
