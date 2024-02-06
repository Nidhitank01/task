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
  this.favList=this.companyService.favorite
  console.log('fav')
 }
 ngOnInit(){
  this.companyService.addfavorite.subscribe((value)=>{
    if(!this.favList.includes(value.CompanyName)){
      this.companyService.favorite.push(value.CompanyName)
    }
    else{
      alert('already in favorite')
    }
    console.log("fav:",this.favList)
 })
 }
 

}
