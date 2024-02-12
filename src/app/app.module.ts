import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CompanyComponent } from './components/company/company.component';
import { BranchComponent } from './components/branch/branch.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './components/add/add.component';
import { EmployeeService } from './Services/employee.service';
import { FavoriteCompanyListComponent } from './components/home/favorite-company-list/favorite-company-list.component';
import { CompanyService } from './Services/company.service';
import { BranchService } from './Services/branch.service';
import { LoginService } from './Services/login.service';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SubBarComponent } from './components/sub-bar/sub-bar.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchComponent,
    HomeComponent,
    SignupComponent,
    AddComponent,
    FavoriteCompanyListComponent,
    SearchPipe,
    SubBarComponent,
     FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   AppRoutingModule,
   ReactiveFormsModule,
   HttpClientModule

  ],
  providers: [EmployeeService,CompanyService,BranchService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
