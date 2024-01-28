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
}
