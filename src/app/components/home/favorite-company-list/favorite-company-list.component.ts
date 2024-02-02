import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-favorite-company-list',
  templateUrl: './favorite-company-list.component.html',
  styleUrls: ['./favorite-company-list.component.css']
})
export class FavoriteCompanyListComponent implements OnInit {

favList:string[]=[]
 constructor(private companyService:CompanyService){
  console.log('fav')
 }
 ngOnInit(){
  this.companyService.addfavorite.subscribe((value)=>{
    this.favList.push(value.CompanyName)
    console.log("fav:",this.favList)
 })
 }
 

}
