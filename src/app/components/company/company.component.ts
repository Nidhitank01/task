import { Component } from '@angular/core';
import { Company } from 'src/app/Model/Company.Model';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  CompanyList:Company[]=[]
  constructor(private CompanyService:CompanyService){

  }
  ngOnInit(){
    this.CompanyService.setCompanyList()
    this.CompanyList=JSON.parse(this.CompanyService.getCompanyList())
  }
}
